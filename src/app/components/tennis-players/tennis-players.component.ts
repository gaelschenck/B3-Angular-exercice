import { Component } from '@angular/core';
import { TennisPlayers } from '../../Model/tennis-players';


@Component({
  selector: 'app-tennis-players',
  standalone: true,
  imports: [],
  templateUrl: './tennis-players.component.html',
  styleUrl: './tennis-players.component.scss'
})
export class TennisPlayersComponent {

  public playerName = "Federrer";

  public player: TennisPlayers = {
    id: 1,
    name: "Sampras",
    firstName: "Pete"
};
}
