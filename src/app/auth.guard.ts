import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from './data.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private data: DataService, private router: Router) { }

  canActivate(): boolean	{
  	if (this.data.loggedIn())	{
  		return true
  	}	else	{
  		this.router.navigate(['/login'])
  		return false
  	}
  }


}
