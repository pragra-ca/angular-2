import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookModel } from '../model/book.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  item: BookModel = {
    id: 0,
    author: '',
    description:'',
    isbn:0,
    name:''
  };
  
  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.service.getSelectedItem().subscribe(
      data=>{
        this.item = data;
      },
      error=>{
        console.log(error);
        
      }
    )
  }

}
