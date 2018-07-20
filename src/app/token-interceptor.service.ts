// import { Injectable, Injector } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,} from '@angular/common/http';
// import { DataService } from './data.service';
// import { Observable } from 'rxjs/Observable';


// @Injectable()
// export class TokenInterceptorService implements HttpInterceptor {

//   constructor(private data: DataService) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>	{
  	
//   	let tokenizedReq = request.clone({
//   		setHeaders: {
//   			Authorization: 'token 520da4fa70378c0418efe02b61293e88e08eb2de'
//   		}
//   	});
//   	return next.handle(tokenizedReq);
//   }

// }


import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  tokenString: string;

  constructor(private injector: Injector, private data: DataService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler)	{
  	// let dataService = this.injector.get(DataService)
       if (req.url === '' || req.url === '/story' || req.url === 'goals/:id' || req.url === '/addgoal/:id' || req.url === '/addstory'){
      // if (localStorage.getItem('token') == this.tokenString){
        let tokenizedReq = req.clone({
      		setHeaders: {
             // Authorization: 'Token 520da4fa70378c0418efe02b61293e88e08eb2de'
      			// Authorization: `Token ${dataService.getToken()}`
            // Authorization: `Bearerrrr localStorage.getItem('token')`
           // Authorization: 'Token 520da4fa70378c0418efe02b61293e88e08eb2de'
      		}
      	})
      	return next.handle(tokenizedReq)
        } 

      else  {
          let tokenizedReq = req.clone({
      
          })
          return next.handle(tokenizedReq)      
      }
  }

}
