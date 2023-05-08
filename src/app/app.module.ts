import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ObserveElementDirective } from './directives/observe-element.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentComponent } from './components/agent/agent.component';
import { AlertComponent } from './components/alert/alert.component';
import { CvDetailsComponent } from './components/cv-details/cv-details.component';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TemplateComponent } from './components/template/template.component';
import { UserCvItemComponent } from './components/user-cv-item/user-cv-item.component';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    CvComponent,
    CvListComponent,
    CvDetailsComponent,
    SpinnerComponent,
    UserCvItemComponent,
    DefaultImagePipe,
    HomeComponent,
    ObserveElementDirective,
    AgentComponent,
    TemplateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
