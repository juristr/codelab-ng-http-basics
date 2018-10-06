import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Http Basics';
  people: Person[];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(x => {
      this.people = x;
    });
  }
}
