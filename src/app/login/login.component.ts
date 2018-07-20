import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type' : 'application/json'
	})
};


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	input;
	token;
	role;

  constructor( private data: DataService, private httpClient: HttpClient, private router: Router) { }

	 ngOnInit() { 
	 	this.input = {
	 		username: '',
	 		password:''
	 	};
	 	}


	// login(){
	// 	this.data.loginUser(this.input).subscribe(
	// 		response => {
	// 			console.log(response.key)
	// 			localStorage.setItem('token', response.key)
	//   			this.router.navigate([''])	
	// 		},
	// 			error => console.log('error', error)
	// 		);
	// }


	login(){
		this.httpClient.post('http://localhost:8000/scrumy/v1/rest-auth/login/',
		 this.input
		) 
	  	.subscribe(
			response => {		
				localStorage.setItem('token', response['key'])
				localStorage.setItem('role', response['role'])
				// this.router.navigate([''])
				if (response['role'] == 'Developer') {
					this.router.navigate(['/developer']);
				}	
				else if (response['role'] == 'Admin') {
					this.router.navigate(['/admin']);
				}	

				else if (response['role'] == 'Quality Assurance') {
					this.router.navigate(['/qa']);
				}
				else if (response['role'] == 'Owner') {
					this.router.navigate(['/owner']);
				}	
				else {
					this.router.navigate(['/story']);
				}	

	  			
			},
				error => console.log('error', error)
			);

}


}
