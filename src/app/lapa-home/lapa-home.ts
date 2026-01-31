import { Component } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';

@Component({
  selector: 'app-lapa-home',
  standalone: true,
  imports: [Navbar],
  templateUrl: './lapa-home.html',
  styleUrl: './lapa-home.css',
})
export class LapaHome {}
