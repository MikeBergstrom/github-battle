import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Player } from '../player'
import { Router } from '@angular/router'

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
   players = [];
  constructor(private _apiservice: ApiService, private _router:Router) { }

  ngOnInit() {
  this._apiservice.retrieveAll()
  .then( players => {this.players = players})
  .catch( err => {console.log("retrieve errors"),err})
  }
}
