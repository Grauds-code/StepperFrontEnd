import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PollVote } from '../../models/models';

@Component({
  selector: 'app-lapa-vote',
  standalone: true,
  imports: [Navbar, ReactiveFormsModule],
  templateUrl: './lapa-vote.html',
  styleUrls: ['./lapa-vote.css'],
})
export class LapaVote {}
