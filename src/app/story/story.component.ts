import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { DataService } from '../data.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { GoalsComponent } from '../goals/goals.component';
import { UsersComponent } from '../users/users.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';



const httpOptions = {
	headers: new HttpHeaders({
    Authorization: 'Token ' + localStorage.getItem('token'),
		'Content-Type' : 'application/json'
	})
};

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [DataService]
})



export class StoryComponent implements OnInit {
	name:string = '';
	goal:string = '';
	user_id:number;
	goal_id:number;
	statu_id:number;
	users:any ;
  stories:any;
  bag: 'bag-weekly';
  closeResult: string;
  scrumy_owner: Number;
  scrumy_status: Number;
  status: any = '';
  inputStatusMsg: string = '';
  usersVar: any;

  	constructor(private modalService: NgbModal, private dragulaService: DragulaService, private httpClient: HttpClient, private data: DataService, private router: Router, private route: ActivatedRoute)
  	 {
  	 	dragulaService.drag.subscribe((value) => {
		    console.log(`drag: ${value[0]}`);
		    this.onDrop(value.slice(1));
		    });

      this.route.params.subscribe(params => this.scrumy_owner =params.id);

		// dragulaService.setOptions('bag-weekly',{
		// 	move:true
		// })
  	  }

  	ngOnInit() {
  		this.data.getUsers()
  		.subscribe(
  		 data => this.users = data
  		 );

      this.data.getStatus()
      .subscribe(
       data => this.status = data
       );
      this.scrumy_status = 1;
      this.goal = '';
  }


    





  	private onDrop(args) {
    let [e, el] = args;

    // do something
    this.dragulaService.drop.subscribe(value => {
    //Bag  

    console.log(`bag: ${value[0]}`);

    // What is moved
    console.log(`Content: ${value[1].innerHTML}`);

    // Destination
    console.log(`Destination: ${value[2]['id']}`);

    // Origin
    console.log(`origin: ${value[3]['id']}`);
    console.log(value[1].dataset.id);
   

    this.httpClient.patch('http://127.0.0.1:8000/goals/' + value[1].dataset.id + '/', 
		{
	  		scrumy_status_id: value[2]['id']
	  	}, httpOptions).subscribe(
	  		(data:any) => {
	  			console.log(data)

	  		});
	  	console.log(`drag2: ${value[1].dataset.id}`)
	  	console.log(`drag: ${value[2]['id']}`)

});
    	
    
    
  }



  open(content, id?:any) {
    console.log(id)
    this.scrumy_owner = id
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }


postGoal(){
    console.log(this.scrumy_status);
    console.log(this.scrumy_owner);
    // this.httpClient.post('http://localhost:8000/goals/', 
    // {
   //     goals: this.goal,
   //     scrumy_user: this.scrumy_user,
   //     scrumy_status: this.scrumy_status
   //   })
      this.data.addNewGoal(
    {
        goals: this.goal,
        scrumy_user_id: this.scrumy_owner,
        scrumy_status_id: this.scrumy_status
      } )
      .subscribe(
        (data:any) => {
          this.router.navigate([''])
          console.log(data) 
          this.goal = '';
          this.scrumy_owner = null;
          this.scrumy_status = 1;
          this.inputStatusMsg = 'Goal added successfully';
           this.usersVar = this.data.getUsers()
            .subscribe(
             data => this.users = data
             );

        })

  }



}
