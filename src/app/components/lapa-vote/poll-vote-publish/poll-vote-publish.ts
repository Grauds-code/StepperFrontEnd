import { Component, effect, input, output, signal } from '@angular/core';
import { PollVote } from '../../../models/models';
@Component({
  selector: 'app-poll-vote-publish',
  imports: [],
  templateUrl: './poll-vote-publish.html',
  styleUrl: './poll-vote-publish.css',
})
export class PollVotePublish {
  readonly poll = input<PollVote | undefined>();
  readonly pollIndex = input.required<number>();
  readonly remove = output<number>();
  readonly options = signal<Array<{ index: number; label: string }>>([]);
  readonly selected = signal<Set<number>>(new Set());
  readonly submitted = signal(false);
  readonly votes = signal<number[]>([0, 0, 0, 0, 0, 0]);

  constructor() {
    effect(() => {
      const current = this.poll();
      if (!current) {
        this.options.set([]);
        this.selected.set(new Set());
        this.submitted.set(false);
        this.votes.set([0, 0, 0, 0, 0, 0]);
        return;
      }

      this.options.set(this.buildOptions(current));
      this.selected.set(new Set());
      this.submitted.set(false);
      this.votes.set([0, 0, 0, 0, 0, 0]);
    });
  }

  toggleOption(index: number): void {
    if (this.submitted()) {
      return;
    }

    const allowMultiple = !!this.poll()?.allowMultiple;
    const next = new Set(this.selected());

    if (allowMultiple) {
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
    } else {
      next.clear();
      next.add(index);
    }

    this.selected.set(next);
  }

  submitVote(): void {
    if (this.submitted()) {
      return;
    }

    const picks = Array.from(this.selected());
    if (picks.length === 0) {
      return;
    }

    const updated = [...this.votes()];
    for (const index of picks) {
      if (updated[index] !== undefined) {
        updated[index] += 1;
      }
    }

    this.votes.set(updated);
    this.submitted.set(true);
  }

  percent(index: number): number {
    const tally = this.votes();
    const total = tally.reduce((sum, value) => sum + value, 0);
    if (total === 0) {
      return 0;
    }
    return Math.round((tally[index] / total) * 100);
  }

  isSelected(index: number): boolean {
    return this.selected().has(index);
  }

  hasSelection(): boolean {
    return this.selected().size > 0;
  }

  requestRemove(): void {
    this.remove.emit(this.pollIndex());
  }

  private buildOptions(poll: PollVote): Array<{ index: number; label: string }> {
    const raw = [
      poll.option1,
      poll.option2,
      poll.option3,
      poll.option4,
      poll.option5,
      poll.option6,
    ];

    return raw
      .map((label, index) => ({ index, label: label ?? '' }))
      .filter(({ label }) => label.trim().length > 0);
  }
}
