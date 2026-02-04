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

export interface PollVote {
  pollQuestion: string;
  option1: string;
  option2: string;
  option3?: string;
  option4?: string;
  option5?: string;
  option6?: string;
  allowMultiple?: boolean;
}

declare var bootstrap: any;

@Component({
  selector: 'app-lapa-vote',
  standalone: true,
  imports: [Navbar, ReactiveFormsModule],
  templateUrl: './lapa-vote.html',
  styleUrls: ['./lapa-vote.css'],
})
export class LapaVote {
  readonly MAX_OPTIONS = 6;

  form: FormGroup;
  publishedPolls: PollVote[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      pollQuestion: ['', [Validators.required, Validators.maxLength(140)]],
      allowMultiple: [true],
      options: this.fb.array([
        this.createRequiredOptionControl(),
        this.createRequiredOptionControl(),
      ]),
    });
  }

  get options(): FormArray<FormControl<string>> {
    return this.form.get('options') as FormArray<FormControl<string>>;
  }

  get optionsCount(): number {
    return this.options.length;
  }

  canAddOption(): boolean {
    return this.optionsCount < this.MAX_OPTIONS;
  }

  canRemoveOption(index: number): boolean {
    return index >= 2;
  }

  addOption(): void {
    if (!this.canAddOption()) return;
    this.options.push(this.createRequiredOptionControl());
  }

  removeOption(index: number): void {
    if (!this.canRemoveOption(index)) return;
    this.options.removeAt(index);
  }

  createPollVote(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    const pollVote = this.toPollVoteModel();

    // Add to published polls array
    this.publishedPolls.push(pollVote);

    // Reset form
    this.form.reset({
      pollQuestion: '',
      allowMultiple: true,
      options: ['', ''],
    });

    // Reset FormArray to 2 options
    while (this.options.length > 2) {
      this.options.removeAt(this.options.length - 1);
    }

    // Close modal
    const modalElement = document.getElementById('createPollModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }

    console.log('Created poll:', pollVote);
    console.log('All published polls:', this.publishedPolls);
  }

  private createRequiredOptionControl(): FormControl<string> {
    return this.fb.control('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(60)],
    });
  }

  private toPollVoteModel(): PollVote {
    const question = (this.form.value.pollQuestion ?? '').trim();
    const allowMultiple = !!this.form.value.allowMultiple;

    const rawOptions = (this.form.value.options ?? []) as string[];
    const trimmed = rawOptions.map((v) => (v ?? '').trim());

    const model: PollVote = {
      pollQuestion: question,
      option1: trimmed[0],
      option2: trimmed[1],
      allowMultiple,
    };

    const extras = trimmed.slice(2, 6).filter((v) => v.length > 0);

    if (extras[0]) model.option3 = extras[0];
    if (extras[1]) model.option4 = extras[1];
    if (extras[2]) model.option5 = extras[2];
    if (extras[3]) model.option6 = extras[3];

    return model;
  }

  removePoll(index: number): void {
    this.publishedPolls.splice(index, 1);
  }
}
