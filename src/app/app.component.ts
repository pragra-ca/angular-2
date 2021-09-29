import { Component } from '@angular/core';
import { BookModel } from './model/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'communication';

  item: BookModel = {
    id: 0,
    author: '',
    description:'',
    isbn:0,
    name:''
  };

  receiveEvent(selected: BookModel) {
    //this.item = selected
  }
}
