import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-lapa-vote',
  standalone: true,
  imports: [Navbar],
  templateUrl: './lapa-vote.html',
  styleUrls: ['./lapa-vote.css'],
})
export class LapaVote {}
