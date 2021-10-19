import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpPostGetDeleteService {

  baseURL: string = "http://localhost:3000/";
  idNumber: number = 0;
 
  constructor(private http: HttpClient) {
  }
 
  getPeople(): Observable<Person[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<Person[]>(this.baseURL + 'people')
  }
 
  addPerson(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    this.idNumber++;
    return this.http.post(this.baseURL + 'people', body,{'headers':headers})
  }

  deletePerson() {
        if(this.idNumber < 1) {
          console.log("nothing to delete here");
        }
        else {
          this.http.delete(this.baseURL + 'people/' + this.idNumber)
          .subscribe(() => console.log('Delete successful'));
          this.idNumber--;}
}

}
