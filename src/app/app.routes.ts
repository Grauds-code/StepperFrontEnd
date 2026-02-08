import { Routes } from '@angular/router';
import { LapaVote } from './components/lapa-vote/lapa-vote';
import { LapaGamelobby } from './components/lapa-gamelobby/lapa-gamelobby';
import { LapaHome } from './components/lapa-home/lapa-home';

export const routes: Routes = [
  { path: '', redirectTo: 'lapahome', pathMatch: 'full' },
  { path: 'lapahome', component: LapaHome },
  { path: 'lapavote', component: LapaVote },
  { path: 'lapagamelobby', component: LapaGamelobby },
];
