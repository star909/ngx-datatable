/**Importing required files */
import { Component, OnInit } from '@angular/core';
import  { GetDataService } from '../get-data.service';

/**Creating meta Data  */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
/**Class to get the data through http request */
export class DataTableComponent implements OnInit {
 jsonData:string[];
  
  constructor(private api:GetDataService) { } /**Creating service api */
 
 /**Getting data from json data */
 private getJsonData():void{
   try{
     this.api.getData()
     .subscribe(data=>{
       this.jsonData=data.data;
       console.log(this.jsonData)
     })
   }catch(ex){
     console.log(ex);
   }
 }

 
 /**Declaration of method  */
  ngOnInit() {
    this.getJsonData();
  }

}
