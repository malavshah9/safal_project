import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskProvider } from '../../providers/task/task';
import { task } from './class_task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks:task[]=[];
  constructor(public navCtrl: NavController,public db:TaskProvider) {
    this.db.getAllTask().subscribe((data:task[])=>{
      this.tasks=data;
      
      
    },function(err){
        alert(err);
    },
  function(){
alert("completed");
  });
  }

}
