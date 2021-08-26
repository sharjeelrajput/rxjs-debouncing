import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { ApiCallsService } from '../services/api-calls.service';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debouncing',
  templateUrl: './debouncing.component.html',
  styleUrls: ['./debouncing.component.css']
})
export class DebouncingComponent implements OnInit {
  bookList : any;
  searchKeyUp = new Subject<any>();

  constructor(private apiCall : ApiCallsService) { }

  ngOnInit(): void {

   this.searchKeyUp.pipe((debounceTime(200))).subscribe(value => {    
     console.log(' Search :: ', value);
     this.getBooks(value);
   });
  }

  onSearch(event : any) {   
   this.searchKeyUp.next(event.target.value);
  }

  getBooks(search : string) {
    this.bookList =  this.apiCall.getBooks(search);    
  }

}
