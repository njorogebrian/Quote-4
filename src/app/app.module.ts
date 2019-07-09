import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { AddFormComponent } from './add-form/add-form.component';
import { from } from 'rxjs';
import { HighlightDirective} from'./highlight.directive';
import {DateCountPipe} from './date-count.pipe';
import { QuoteVotesComponent} from './quote-votes/quote-votes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component'

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    AddFormComponent,
    HighlightDirective,
    DateCountPipe,
    QuoteVotesComponent,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
