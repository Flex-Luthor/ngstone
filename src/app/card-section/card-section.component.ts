import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import * as _ from "lodash";
@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {
  cards: any;
  
  constructor(private http : Http) { }

  ngOnInit() {
    this.doGetRequest()
    // need to flatten this.cards into singular array and iterate through *ngFor
  }
  doGetRequest() {
    let headers = new Headers({"X-Mashape-Key" : "q9P2San3chmshCsx246WEr8cZacZp18VGmVjsnoWVT8NUtdqep"})
    let options = new RequestOptions({headers: headers})
    return this.http
      .get('https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1&locale=enUS', options)
      .map((data: any) => data.json())
      .subscribe(
        (data: any) => {
          this.cards = [];
          _.flatMap(data, (a) => {
            _.forEach(a, (iteratee) => {
              if (iteratee.cost >= 0 && iteratee.img !== 'http://wow.zamimg.com/images/hearthstone/cards/enus/original/CRED_50.png'){
                this.cards.push(iteratee)
              }
            })})
            this.cards = _.orderBy(this.cards, 'cost')
          },
          err => console.log(err))
  }

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  handleErrorPromise (error: any) {
	  console.error(error.message || error);
	  return Promise.reject(error.message || error);
  }
}