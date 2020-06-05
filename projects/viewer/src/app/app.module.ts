import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {JacksonjaoButtonsModule} from '../../../jacksonjao-buttons/src/lib/jacksonjao-buttons.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    JacksonjaoButtonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
