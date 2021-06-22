import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource, MatTableModule } from '@angular/material';
import { Covid19Component } from './covid19/covid19.component';
import { HttpClientModule } from '@angular/common/http';
import { JavatechieCovid19Service } from './javatechie-covid19.service';


@NgModule({
  declarations: [
    AppComponent,
    Covid19Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    
    
  ],
  providers: [JavatechieCovid19Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
