import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stories;
  closeResult: string;
	constructor(public data: DataService, private router: Router, private modalService: NgbModal){}

    	ngOnInit() {
  		console.log(localStorage.getItem('token'))
      console.log('newjj')
  		this.data.getUsers()
  		.subscribe(
  		 data => this.stories = data
  		 );
  	}

    toBoard(){
      this.data.getUsers() 
        .subscribe(
        response => { 
                console.log('appComp' + localStorage.getItem('token'))
            this.router.navigate([''])  
        },
          error => console.log('error', error)
        );

  }


     open(content) {
        this.modalService.open(content).result.then((result) => {
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
}
