import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  // ng g i models/Task
  newTask={} as Task;



  DoIt:Task[] =[
    {
    Errand: "Do the laundry",
    Complete: false,
    },{
      Errand: "Buy groceries",
      Complete: false,
    },
    {
      Errand: "Clean the house",
      Complete: false,
    },
    {
      Errand: "Walk the dog",
      Complete: false,
    },
    {
      Errand: "Prepare dinner",
      Complete: false,
    },
    {
      Errand: "Read a book",
      Complete: false,
    },
    {
      Errand: "Exercise for 30 minutes",
      Complete: false,
    },
    {
      Errand: "Call mom",
      Complete: false,
    },
    {
      Errand: "Write a report",
      Complete: false,
    },
    {
      Errand: "Pay bills",
      Complete: false,
    },
    {
      Errand: "Mow the lawn",
      Complete: false,
    },
    {
      Errand: "Organize the closet",
      Complete: false,
    },
    {
      Errand: "Study for an hour",
      Complete: false,
    },
  ]
 CompletedTask(errand:string):void{
  let index = this.DoIt.findIndex((b:Task) => b.Errand == errand);
  this.DoIt[index].Complete=true;
 }
 addTask():void{
  let result:Task={
    Errand:this.newTask.Errand,
    Complete:false
  };
  this.DoIt.push(result);
  this.newTask= {} as Task;
 }

 removeTask(task:Task): void{
  let index = this.DoIt.findIndex((b:Task) => b=task);
  this.DoIt.splice(index, 1);
 }
//  Congratulations():boolean{
  
//   if(this.DoIt.length==0||this.DoIt.every(Complete => true))
//   {
//     return true;
//   }
//   else
//   {
//     return false; 
//   }
//  };
Congratulations():boolean{
  let result:boolean = false;
  this.DoIt.forEach((t:Task) => {
    if(t.Complete == false){
      
      result = true;
    }

    
  });
  return result;
}

serch:string ='';
taskList:Task[] = [];

searchString():void{
  this.taskList=this.DoIt.filter((b)=>b.Errand.includes(this.serch));
  console.log(this.taskList);
}
}
