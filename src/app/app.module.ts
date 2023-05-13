import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ObserveElementDirective } from './directives/observe-element.directive';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { CvDetailsComponent } from './components/cv-details/cv-details.component';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TemplateComponent } from './components/template/template.component';
import { UserCvItemComponent } from './components/user-cv-item/user-cv-item.component';
import { AddCvComponent } from './pages/add-cv/add-cv.component';
import { AgentComponent } from './pages/agent/agent.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    CvListComponent,
    CvDetailsComponent,
    SpinnerComponent,
    UserCvItemComponent,
    DefaultImagePipe,
    HomeComponent,
    ObserveElementDirective,
    AgentComponent,
    TemplateComponent,
    PageNotFoundComponent,
    SidebarComponent,
    UserProfileComponent,
    AddCvComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
