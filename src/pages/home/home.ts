import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleServiceProvider]
})
export class HomePage {

  public people;

  constructor(public navCtrl: NavController, public peopleService: PeopleServiceProvider) {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.load().subscribe(
      res => { 
        this.people = res;
      }
    )
  }
}
