import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// @Injectable({
//   providedIn: AppModule,
// })
export class ApiCallsService {

  private googleApiBooks = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private httpClient : HttpClient) { 
  }

  getBooks(search) :  Observable<any> {
    return this.httpClient.get(this.googleApiBooks+"?q="+search).pipe(map( (d : any) => {
      return d.items; 
    }));
  }
}
