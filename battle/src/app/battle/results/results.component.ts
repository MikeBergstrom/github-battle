import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'
import { Player } from '../../player'
import { Router } from '@angular/router'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  playerwin: Player
  playerlose: Player
  players = [];
  constructor(private _apiservice: ApiService, private _router:Router) { }

  ngOnInit() {
  this._apiservice.retrieveCurrent()
  .then( players => {this.players = players; console.log(this.players)})
  .catch( err => {console.log("retrieve errors"),err})
}
  startAgain(){
    this._apiservice.reset();
    this._router.navigate(['/battle'])
  }
}

