import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


const httpOptions = {
	headers: new HttpHeaders({
    Authorization: 'Tokens ' + localStorage.getItem('token')
		// 'Content-Type' : 'application/json',

	})
};



@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
  providers: [DataService]
})
export class GoalsComponent implements OnInit {
	scrumy_user: Number;
	scrumy_status: Number;
	status: any = '';
	goal:string;
  constructor(private httpClient: HttpClient, private data: DataService, private route: ActivatedRoute, private router: Router ) {
  	this.route.params.subscribe(params => this.scrumy_user =params.id);
   }


   ngOnInit() {
  		this.data.getStatus()
  		.subscribe(
  		 data => this.status = data
  		 )
  		this.scrumy_status = 1;
  		this.goal = '';
  	}


	postGoal(){
		console.log(this.scrumy_status);
		// this.httpClient.post('http://localhost:8000/goals/', 
		// {
	 //  		goals: this.goal,
	 //  		scrumy_user: this.scrumy_user,
	 //  		scrumy_status: this.scrumy_status
	 //  	})
	  	this.data.addNewGoal(
		{
	  		goals: this.goal,
	  		scrumy_user_id: this.scrumy_user,
	  		scrumy_status_id: this.scrumy_status
	  	} )
	  	.subscribe(
	  		(data:any) => {
	  			this.router.navigate([''])
	  			console.log(data)	
	  		})

	}

}
