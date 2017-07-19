import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RankComponent } from './rank/rank.component';
import { BattleComponent } from './battle/battle.component';
import { CompetitionComponent } from './battle/competition/competition.component';
import { ResultsComponent } from './battle/results/results.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './api.service';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RankComponent,
    BattleComponent,
    CompetitionComponent,
    ResultsComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule, // <-- Include module in our AppModules
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
