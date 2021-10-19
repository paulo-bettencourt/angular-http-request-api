import { Component, OnInit } from '@angular/core';
import { HttpPostGetDeleteService } from './http-post-get-delete.service';
import { Person } from './person';

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post-get-delete.component.html',
  styleUrls: ['./http-post-get-delete.component.css']
})
export class HttpPostGetDeleteComponent implements OnInit {

  mainTitle = 'What do you wanna do today?';
  title = 'Task List:';
  people: Person[] = [];
  person = new Person()
  
  constructor(private apiService: HttpPostGetDeleteService) {}
 
  ngOnInit() {
    this.refreshPeople()
  }
 
  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people=data;
      })      
 
  }
 
  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }

  deletePerson() {
    this.apiService.deletePerson();
    this.refreshPeople();
  }
  

}
function Input(arg0: string) {
  throw new Error('Function not implemented.');
}

