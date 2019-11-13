import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ListComponent } from './persons/list/list.component';
import { PersonsModule } from './persons/persons.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PersonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
