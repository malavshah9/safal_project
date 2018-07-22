import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyClass } from "./class2";
import { BiddingReports } from "./class1";
import { TaskProvider } from '../../providers/task/task';
import { task } from '../home/class_task';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  task_name:string;
  Biddings:MyClass;
  Bidds:BiddingReports[];
  constructor(public navCtrl: NavController,public db:TaskProvider) {
    
    this.db.getAllReports().subscribe((data:MyClass)=>{
      console.log("Data Loaded");
      this.Biddings=data;
      this.Bidds=data.BiddingReport;
      
    },function(err){
        alert(err);
    },
  function(){
alert("completed");
  });
  }
  addTask(){
    this.db.InsertTask(new task(null,this.task_name)).subscribe((data)=>{
      console.log(data);
    },
  function(err){
  //  alert(err);
  },
function(){
  
});
  }
 
}
