import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { AdminComponent } from './page/admin/admin.component';
import { NavComponent } from './common/nav/nav.component';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    AdminComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
