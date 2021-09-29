import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BookModel } from './model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  selected  = new Subject<BookModel>();
  items : BookModel[] =  [
    { id: 1, name: 'Learning Java', isbn: 1722937837, author: 'Atin', description: 'Learning java could be fun'},
    { id: 2, name: 'Learning Angular', isbn: 172293783, author: 'Subham', description: 'Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces'},
    { id: 3, name: 'Learning C++', isbn: 1722937837, author: 'Atin', description: 'Learning java could be fun'},
    { id: 4, name: 'Learning C#', isbn: 1722937837, author: 'Atin', description: 'Learning java could be fun'},
    { id: 5, name: 'Learning Selenium', isbn: 1722937837, author: 'Atin', description: 'Learning java could be fun'},
    { id: 6, name: 'Learning React', isbn: 1722937837, author: 'Atin', description: 'Learning java could be fun'}
    
  ]

  constructor() { }

  selectItem(item: any) : void {
    this.selected.next(item)
  }

  getItems () : BookModel[] {
    return this.items;
  }

  getSelectedItem() : Observable<BookModel> {
    return this.selected.asObservable();
  }
 }
