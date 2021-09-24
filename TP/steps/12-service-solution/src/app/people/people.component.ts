import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/people-service';
import { People } from '../people.model';

@Component({
  selector: 'sfeir-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {
  people: People[] = [];

  constructor(private readonly peopleService: PeopleService) {}

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.peopleService.fetch().subscribe(people => (this.people = people));
  }

  delete(person: any) {
    this.peopleService.delete(person.id).subscribe(people => (this.people = people));
  }
}
