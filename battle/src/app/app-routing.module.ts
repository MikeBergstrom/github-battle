import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component'
import { RankComponent } from './rank/rank.component'
import { CompetitionComponent } from './battle/competition/competition.component'
import { ResultsComponent } from './battle/results/results.component'


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'battle'},
    {path: 'rank', component: RankComponent},
    {path: 'battle', component: BattleComponent, children:[
      {path: 'competition', component: CompetitionComponent },
      {path: 'results', component: ResultsComponent },
      {path: '', component: CompetitionComponent }
    ]}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }