import { Component, input, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { ReactiveFormsModule } from '@angular/forms';
import { PollVote } from '../../models/models';
import { FieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-lapa-vote',
  standalone: true,
  imports: [Navbar, ReactiveFormsModule],
  templateUrl: './lapa-vote.html',
  styleUrls: ['./lapa-vote.css'],
})
export class LapaVote {
  readonly PollVote = input<FieldTree<PollVote>>();
}
