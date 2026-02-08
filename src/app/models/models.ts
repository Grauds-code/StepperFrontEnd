import { signal } from '@angular/core';

export interface TournamentCard {
  id?: number;
  tournamentName: string;
  registrationDeadline?: string; //Vel nezinu vai bus vajadzigs.
  tournamentStartTime: string;
  nextGameStartTime: string;
  youAreRegistered: boolean;
  quickMatch: boolean;
  sportType: string;
  //Vai tas ir quick match vai turnirs.
  //Quick match un turnira apbalovjumi atskiras.
  //Quickmatch un turnira struktura atskiras.
  // Qucik match struktura = tournament card->stage card->game card
  // turnira struktura =tournament card->tournament section card->stage caard->
  // 1.opcija = Ja pretournament stage, tad sekos Guess the winner stage, kur uzreiz jautajumi un Group Stage vai league phase, kur uzreiz jautajumi.
  // 2.opcija = Ja DayStage vai PlayOff stage, tad seko vel viens stagecard, kur ir dienu sadalijums vai playoff stadijas sadalijums.

  //Vai tas ietekme kadi bus parejie models?
}

export function createTournamentCard() {
  return signal<TournamentCard>({
    tournamentName: '',
    tournamentStartTime: '',
    nextGameStartTime: '',
    youAreRegistered: false,
    quickMatch: false,
    sportType: '',
  });
}

export interface TournamentSectionCard {
  id?: number;
  sectionName: string;
  sectionStartTime: string;
  nextGameStartTime: string;
}

export function createTournamentSectionCard() {
  return signal<TournamentSectionCard>({
    sectionName: '',
    sectionStartTime: '',
    nextGameStartTime: '',
  });
}

export interface StageCard {
  id?: number;
  stageName: string;
  stageStartTime: string;
  nextGameStartTime: string;
  preTournamentStage: boolean;
}

export function createStageCard() {
  return signal<StageCard>({
    stageName: '',
    stageStartTime: '',
    nextGameStartTime: '',
    preTournamentStage: false,
  });
}

export interface GameCard {
  id?: number;
  team1Name: string;
  team2Name: string;
  gameStartTime: string;
}

export function createGameCard() {
  return signal<GameCard>({
    team1Name: '',
    team2Name: '',
    gameStartTime: '',
  });
}

export interface PollVote {
  id?: number;
  pollQuestion: string;
  option1: string;
  option2: string;
  option3?: string;
  option4?: string;
  option5?: string;
  option6?: string;
  allowMultiple?: boolean;
}

export function createPollVote() {
  return signal<PollVote>({
    pollQuestion: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: '',
    option6: '',
    allowMultiple: false,
  });
}
