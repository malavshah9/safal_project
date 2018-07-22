import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { task } from '../../pages/home/class_task';

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {

  url1:string="http://localhost:3000/task";
  url2:string="http://103.76.228.85/IPOManagementSystemWebService/IPOManagementSystemWebServiceForChannelPartners.asmx/GetBiddingReport?IPOId=209";
  constructor(public http: HttpClient) {
    console.log('Hello TaskProvider Provider');
  }
  
  getAllTask(){
    return this.http.get(this.url1);
  }
  getAllReports(){
    return this.http.get(this.url2);
  }
  InsertTask(task1:task)
  {
    const body=JSON.stringify(task1);
    return this.http.post(this.url1,body,{headers:new HttpHeaders().set('Content-type','application/json'),reportProgress: true});
    
  }

}
