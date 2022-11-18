import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastriesComponent } from './components/pastries/pastries.component';
import { PastryDetailComponent } from './components/pastry-detail/pastry-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
