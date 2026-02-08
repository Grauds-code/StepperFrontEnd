import { Component, input, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { TournamentCard } from '../../models/models';

@Component({
  selector: 'app-lapa-gamelobby',
  standalone: true,
  imports: [Navbar],
  templateUrl: './lapa-gamelobby.html',
  styleUrls: ['./lapa-gamelobby.css'],
})
export class LapaGamelobby {}
