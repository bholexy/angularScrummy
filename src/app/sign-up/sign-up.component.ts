import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	users: object;
	userName:string = '';
	register; 



	constructor( private data: DataService, private httpClient: HttpClient, private router: Router) { }

	 ngOnInit() { 
	 	this.register = {
	 		username: '',

	 		email: '',

	 		password1:'',

	 		password2:'',
	 	};
	 	}	



	// registerUser(){
	// 	this.data.registerNewUser(this.register).subscribe(
	// 		response => {
	// 			localStorage.setItem('token', response.key)
	//   			this.router.navigate([''])				
	// 		},
	// 			error => console.log('error', error)
	// 		);
	// }


		registerUser(){
		this.httpClient.post('http://localhost:8000/scrumy/v1/rest-auth/registration/',
		 this.register
		) 
	  	.subscribe(
			response => {
				localStorage.setItem('token', response['key'])
				alert('Registration successful!!!')
				this.router.navigate(['login'])				
			},
				error => console.log('error', error)
			);

}

}
