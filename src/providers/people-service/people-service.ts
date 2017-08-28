import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleServiceProvider {

  public data;

  constructor(public http: Http) {
  }

  load() {
    return this.http.get('http://migxs.com.br/wp-json/posts?type=ad_listing').map(res => res.json());
  }

}
