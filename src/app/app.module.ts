import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DebouncingComponent } from './pooms/debouncing/debouncing.component'
import { HttpClientModule } from '@angular/common/http'
import { ApiCallsService } from './pooms/services/api-calls.service';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'debouncing', component : DebouncingComponent },
  // { path: '/', component : DebouncingComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    DebouncingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    ApiCallsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
