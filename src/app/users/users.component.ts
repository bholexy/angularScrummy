import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

	users: object;
	userName:string = '';
	register; 



	constructor( private data: DataService, private httpClient: HttpClient, private router: Router) { }

	 ngOnInit() { 
	 	this.register = {
	 		username: '',
	 		email: '',
	 		password:''
	 	};
	 	}	

	postUser(){
		console.log(this.userName);
		this.httpClient.post('http://127.0.0.1:8000/usersjs/', 
		{
	  		username: this.userName
	  	}) 
	  	.subscribe(
	  		(data:any) => {
	  			console.log(data);
	  			this.data.getUsers();	
	  		});
	  	

	}

	registerUser(){
		this.data.registerNewUser(this.register).subscribe(
			response => {
	  			this.router.navigate([''])				
			},
				error => console.log('error', error)
			);
	}

}
