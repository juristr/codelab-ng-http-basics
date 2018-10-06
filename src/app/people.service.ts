import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Person {
  id?: number;
  name: string;
  website?: string;
  twitter?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get<Person[]>('/api/people');
  }

  createPerson(aPerson: Person) {
    return this.http.post<Person>('/api/people', aPerson);
  }
}
