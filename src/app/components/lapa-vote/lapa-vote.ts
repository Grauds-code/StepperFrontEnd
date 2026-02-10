import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { PollVoteCreator } from './poll-vote-creator/poll-vote-creator';
import { PollVotePublish } from './poll-vote-publish/poll-vote-publish';
import { createPollVote } from '../../models/models';
import { form } from '@angular/forms/signals';
import { PollVote } from '../../models/models';

@Component({
  selector: 'app-lapa-vote',
  imports: [Navbar, PollVoteCreator, PollVotePublish],
  templateUrl: './lapa-vote.html',
  styleUrls: ['./lapa-vote.css'],
})
export class LapaVote {
  pollVoteModel = createPollVote();
  pollVoteForm = form(this.pollVoteModel);
  publishedPolls: PollVote[] = [];
  onPublish(poll: PollVote): void {
    this.publishedPolls = [...this.publishedPolls, poll];
  }

  onRemovePoll(index: number): void {
    this.publishedPolls = this.publishedPolls.filter((_, i) => i !== index);
  }
}
