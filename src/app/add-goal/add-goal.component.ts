
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';



@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css'],
  providers: [DataService]
})
export class AddGoalComponent implements OnInit {
	scrumy_user: Number;
	scrumy_status_id: Number;
	scrumy_story: Number;
	status: any = '';
	goal:string;
	input;

  constructor(private httpClient: HttpClient, private data: DataService, private route: ActivatedRoute, private router: Router ) {
  	this.route.params.subscribe(params => this.scrumy_story =params.id);
   }

   ngOnInit() {
   		this.input = {
	 		goals: 'ggdfgdg',
	 		scrumy_user_id:this.scrumy_story,
	 		scrumy_status_id: '1'
	 	};
  		this.data.getStatus()
  		.subscribe(
  		 data => this.status = data
  		 )
  		this.scrumy_status_id = 1;
  	}


	addGoal(){
		console.log(this.input.goals);
		console.log(this.input.scrumy_status);
		console.log(this.input.scrumy_story);
		this.data.addNewGoal(this.input)
		// this.httpClient.post('http://localhost:8000/goals', 
		// {
	 //  		goals: input.goal,	  		
	 //  		scrumy_status: this.scrumy_status,
	 //  		scrumy_story: this.scrumy_story
	 //  	}) 
	  	.subscribe(
	  		(data:any) => {
	  			this.router.navigate([''])
	  			console.log(data)	
	  		})

	}

}

