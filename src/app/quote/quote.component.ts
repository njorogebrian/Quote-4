import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import{Quote} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote:any[];
  @Output() like= new EventEmitter<boolean>();

  quotes = [
  new Quote(1, "stay high ,stay fly", "Branjo", new Date(2019,7,3)),

    

  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`Delete ${this.quotes[index].name}`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  upvote(i){
    this.quotes[i].upvotes ++;
  }
  downvote(i){
    this.quotes[i].downvotes ++;
  }
  constructor(){ }


  ngOnInit() {
  }

}
