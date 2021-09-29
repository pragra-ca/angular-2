import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookService } from '../book.service';
import { BookModel } from '../model/book.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output('selectedItem') selectedItem  = new EventEmitter<BookModel>();

  items: BookModel[]  = [];

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.items = this.service.getItems();
  }

  onItemClick( item: BookModel ): void {
      console.log(item)
      this.service.selectItem(item)
  }

}
