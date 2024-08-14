import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './components/person/person.component';
import { PlusComponent } from './plus/plus.component';
import { MinusComponent } from './minus/minus.component';
import { NumberComponent } from './number/number.component';
import { ResetComponent } from './/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PlusComponent,
    MinusComponent,
    NumberComponent,
    ResetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
