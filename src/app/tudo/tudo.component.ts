import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../app/model/Todo';

@Component({
  selector: 'app-tudo',
  templateUrl: './tudo.component.html',
  styleUrls: ['./tudo.component.scss']
})
export class TudoComponent implements OnInit {
  
todos: Todo[];
inputtodo:string="";

  constructor() { 
    this.todos=[];
  }

  ngOnInit(): void {
    this.todos = [
      {
        content:'First todo',
        completed: true
      },

      {
        content:'second todo',
        completed: true
      }
     
    ]
    this.todos = JSON.parse(localStorage.getItem("todos") || '')  ;
  }
   
  toggledone (id:number) 
  {
   this.todos.map((v,i) => {
   if (i==id) v.completed = !v.completed;
   return v;
    })
  }
   
  deleteTodo (id:number) 
  {
    let todos = JSON.parse(localStorage.getItem("todos") || '')  ;
    this.todos=this.todos.filter((v,i)=> i!==id);
    todos = JSON.parse(localStorage.getItem("todos") || '')  ;
  }

  addTodo () 
  {
    this.todos.push({
        content: this.inputtodo,
        completed: false
    });

    this.inputtodo="";
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
