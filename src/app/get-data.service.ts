/**Importing modules and costants */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataUrl } from './constant';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
/**Creating service class to get json data */
export class GetDataService {
/**Importing http module */
  constructor(private http:HttpClient) { }
/**Function to get json data by subscribing */

  getData():Observable<any>{
    return this.http.get(dataUrl);
  }
}
