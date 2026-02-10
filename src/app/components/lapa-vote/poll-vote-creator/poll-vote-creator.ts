import { Component, input, output } from '@angular/core';

import { FieldTree } from '@angular/forms/signals';
import { PollVote } from '../../../models/models';

@Component({
  selector: 'app-poll-vote-creator',
  imports: [],
  templateUrl: './poll-vote-creator.html',
  styleUrl: './poll-vote-creator.css',
})
export class PollVoteCreator {
  showForm = false;

  openForm(): void {
    this.showForm = true;
  }
  closeForm(): void {
    this.showForm = false;
  }
  readonly readyVote = input.required<FieldTree<PollVote>>();
  readonly publish = output<PollVote>();
  showOption3 = false;
  showOption4 = false;
  showOption5 = false;
  showOption6 = false;
  submit(): void {
    const payload = { ...this.readyVote()().value() };
    this.publish.emit(payload);
    this.resetForm();
    this.showForm = false;
  }

  addOption(): void {
    if (!this.showOption3) {
      this.showOption3 = true;
      return;
    }
    if (!this.showOption4) {
      this.showOption4 = true;
      return;
    }
    if (!this.showOption5) {
      this.showOption5 = true;
      return;
    }
    if (!this.showOption6) {
      this.showOption6 = true;
    }
  }

  removeOption(optionIndex: 3 | 4 | 5 | 6): void {
    switch (optionIndex) {
      case 3: {
        const option3 = this.readyVote().option3;
        if (option3) {
          option3().value.set('');
        }
        this.showOption3 = false;
        break;
      }
      case 4: {
        const option4 = this.readyVote().option4;
        if (option4) {
          option4().value.set('');
        }
        this.showOption4 = false;
        break;
      }
      case 5: {
        const option5 = this.readyVote().option5;
        if (option5) {
          option5().value.set('');
        }
        this.showOption5 = false;
        break;
      }
      case 6: {
        const option6 = this.readyVote().option6;
        if (option6) {
          option6().value.set('');
        }
        this.showOption6 = false;
        break;
      }
    }
  }

  private resetForm(): void {
    const form = this.readyVote();
    form.pollQuestion().value.set('');
    form.option1().value.set('');
    form.option2().value.set('');

    const option3 = form.option3;
    if (option3) {
      option3().value.set('');
    }
    const option4 = form.option4;
    if (option4) {
      option4().value.set('');
    }
    const option5 = form.option5;
    if (option5) {
      option5().value.set('');
    }
    const option6 = form.option6;
    if (option6) {
      option6().value.set('');
    }
    const allowMultiple = form.allowMultiple;
    if (allowMultiple) {
      allowMultiple().value.set(false);
    }

    this.showOption3 = false;
    this.showOption4 = false;
    this.showOption5 = false;
    this.showOption6 = false;
  }
}
