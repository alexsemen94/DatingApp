import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptorProvide } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { appRoutes } from './routes';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './_guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    MessagesComponent,
    ListsComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvide,
    AlertifyService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
