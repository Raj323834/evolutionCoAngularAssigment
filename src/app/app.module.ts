import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UppercaseComponent } from './views/uppercase/uppercase/uppercase.component';
import { UsercomponentComponent } from './views/usercomponent/usercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseComponent,
    UsercomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }