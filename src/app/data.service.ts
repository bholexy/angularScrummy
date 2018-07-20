import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Router } from '@angular/router';


const httpOptions = {
	headers: new HttpHeaders({
    Authorization: 'Token ' + localStorage.getItem('token')
		// 'Content-Type' : 'application/json',

	})
};


@Injectable()
export class DataService {

  constructor(private dragulaService: DragulaService, private httpClient: HttpClient, private router: Router) { }
  name:string = '';
  users:any ;

  getUsers(): Observable<any>{
  	return this.httpClient.get('http://localhost:8000/scrumy/v1/users', httpOptions);
  }

  registerNewUser(userdata): Observable<any>{
  	return this.httpClient.post('http://localhost:8000/scrumy/v1/rest-auth/registration/', userdata);
  }

  loginUser(userdata): Observable<any>{
    return this.httpClient.post('http://localhost:8000/scrumy/v1/rest-auth/login/', userdata);
  }  

  getStatus(){
  	return this.httpClient.get('http://localhost:8000/status/?format=json')
  }

  getStories(){
    return this.httpClient.get('http://localhost:8000/story/?format=json')
  }

	changeStatus() {
	this.dragulaService.drop.subscribe(value => {
	return this.httpClient.patch('http://127.0.0.1:8000/goalsjs/' + value[1].dataset.id + '/', 
		{
	  		scrumy_status: 1
	  	},httpOptions)
	});
}

  loggedIn()  {
    return !!localStorage.getItem('token')
  }

  logOutUser()  {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      location.reload() 
  }

  getToken()  {
    return localStorage.getItem('token')
  }

  removeToken() {
    return localStorage.removeItem('token')
  }


  addNewStory(storydata): Observable<any>{
    return this.httpClient.post('http://localhost:8000/story/', storydata);
  }

  addNewGoal(goaldata): Observable<any>{
    return this.httpClient.post('http://localhost:8000/goals/', goaldata, httpOptions);
  }



}