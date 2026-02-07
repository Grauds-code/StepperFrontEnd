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
export class LapaGamelobby {
  //Demo dati, lai var uztaisit filtrus.

  demoTournamentCard = signal<TournamentCard[]>([
    {
      tournamentName: 'Champions League',
      registrationDeadline: '17.09.2026 23:59',
      tournamentStartTime: '19.09.2026 20:00',
      nextGameStartTime: '19.09.2026 20:00',
      youAreRegistered: false,
      quickMatch: false,
      sportType: 'Football',
    },
  ]);

  demoTournamentCard2 = signal<TournamentCard[]>([
    {
      tournamentName: 'NHL 17.04.2026',
      registrationDeadline: '',
      tournamentStartTime: '17.04.2026 22:00',
      nextGameStartTime: '17.04.2026 22:00',
      youAreRegistered: false,
      quickMatch: true,
      sportType: 'Hockey',
    },
  ]);
  //Demo dati, lai var uztaisit filtrus beidzas.
  //Vai TournamentCard inputi būs arī signāli, lai tos ievadītu admin?

  addsportType = signal<string>('');
}
