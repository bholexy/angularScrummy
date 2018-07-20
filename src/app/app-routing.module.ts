import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { StoryComponent } from './story/story.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { DeveloperComponent } from './developer/developer.component';
import { AdminComponent } from './admin/admin.component';
import { QaComponent } from './qa/qa.component';
import { OwnerComponent } from './owner/owner.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{
		path: '',
		component: StoryComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'app',
		component: AppComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'goals/:id',
		component: GoalsComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'signup',
		component: SignUpComponent
	},
	{
		path: 'addgoal/:id',
		component: AddGoalComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'story',
		component: StoryComponent,
		canActivate: [AuthGuard]
	},	{
		path: 'developer',
		component: DeveloperComponent,
		canActivate: [AuthGuard]
	},	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [AuthGuard]
	},	{
		path: 'qa',
		component: QaComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'owner',
		component: OwnerComponent,
		canActivate: [AuthGuard]
	}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
