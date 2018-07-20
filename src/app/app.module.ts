import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModuleModule } from './auth-module/auth-module.module';


import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GoalsComponent } from './goals/goals.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DataService } from './data.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { StoryComponent } from './story/story.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { DeveloperComponent } from './developer/developer.component';
import { AdminComponent } from './admin/admin.component';
import { QaComponent } from './qa/qa.component';
import { OwnerComponent } from './owner/owner.component';
import { NgbdModalBasic } from './modal-basic';



@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    UsersComponent,
    LoginComponent,
    SignUpComponent,
    AddGoalComponent,
    StoryComponent,
    AddStoryComponent,
    DeveloperComponent,
    AdminComponent,
    QaComponent,
    OwnerComponent,
    NgbdModalBasic
  ],
  imports: [  
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DragulaModule,
    NgbModule.forRoot(),
    HttpModule,
    AuthModule,
    MainModule
  ],
  providers: [ DataService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

