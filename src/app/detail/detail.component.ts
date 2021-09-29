import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../model/book.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input('item') item : BookModel = {
    id: 0,
    name: '',
    description: '',
    author: '',
    isbn: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
