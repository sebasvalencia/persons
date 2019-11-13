import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getPersons() {
    return this.http.get(`${this.url}/users?per_page=6&delay=1`);
  }

}
