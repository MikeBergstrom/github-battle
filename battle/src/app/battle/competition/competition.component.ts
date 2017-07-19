import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'
import { Player } from '../../player'
import { Router } from '@angular/router'

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  player1 = new Player()
  player2 = new Player()
  player1status = {status: false, errors:""}
  player2status = {status: false, errors:""}

  constructor(private _apiService: ApiService, private _router:Router) { }

  ngOnInit() {
  }
  addPlayer1(){
    console.log(this.player1)
    this._apiService.getGithub(this.player1)
    .then(player => {
      this.player1.image = player.avatar_url; this.player1status.status = true; this.player1.score = player.public_repos + player.followers; this._apiService.create(this.player1)
      .then( player => {this.player1 = player})
      .catch(err => {this.player1status.errors = err, console.log("create errors")})})
    .catch( err => { console.log("retrieve error"), err})
    console.log(this.player1)
  }
  addPlayer2(){
    console.log(this.player2)
    this._apiService.getGithub(this.player2)
    .then(player => {console.log("player2 retrieve from gh", player)
      this.player2.image = player.avatar_url; this.player2status.status = true; this.player2.score = player.public_repos + player.followers; this._apiService.create(this.player2)
      .then( player => {this.player2 = player})
      .catch(err => {this.player2status.errors = err, console.log("create errors")})})
    .catch( err => { console.log("retrieve error"), err})
    console.log(this.player2)
  }
  start(){
    console.log("start function")
    this._router.navigateByUrl('/battle/results');
    
  }
}
