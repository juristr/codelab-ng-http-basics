import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from './people.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Http Basics';
  people: Observable<Person[]>;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
  }

  createPerson(name: string) {
    this.peopleService
      .createPerson({
        name: name
      })
      .subscribe(createdPerson => {
        console.log(createdPerson);
      });
  }
}
