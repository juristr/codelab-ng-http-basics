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
    this.initList();
  }

  initList() {
    this.people = this.peopleService.getPeople();
  }

  createPerson(name: string) {
    this.peopleService
      .createPerson({
        name: name
      })
      .subscribe(createdPerson => {
        this.initList();
      });
  }

  onSearchPerson(name: string) {
    if (name) {
      this.people = this.peopleService.getPeople({ name: name });
    } else {
      this.people = this.peopleService.getPeople();
    }
  }
}
