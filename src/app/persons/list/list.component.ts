import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';
import { ReqRes } from '../../models/reqres.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public persons: Person[] = [];

  constructor(private service: PersonService) { }

  ngOnInit() {
    this.service.getPersons().subscribe(
      (data: ReqRes) => {
        this.persons = data.data;
        console.log('v', data)
      }
    );
  }

}
