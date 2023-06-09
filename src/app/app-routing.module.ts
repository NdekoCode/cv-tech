import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCvComponent } from './pages/add-cv/add-cv.component';
import { AgentComponent } from './pages/agent/agent.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'agents',
    component: AgentComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user/profile/:id',
    component: UserProfileComponent,
  },
  {
    path: 'user/add-cv',
    component: AddCvComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
