
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {

	users: object;
	userName:string = '';
	register; 



	constructor( private data: DataService, private httpClient: HttpClient, private router: Router) { }

	 ngOnInit() { 
	 	this.register = {
	 		story: '',
	 	};
	 	}	


	addStory(){
		this.data.addNewStory(this.register).subscribe(
			response => {
	  			this.router.navigate([''])				
			},
				error => console.log('error', error)
			);
	}

}

