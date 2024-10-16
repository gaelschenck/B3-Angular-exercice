import { Component } from '@angular/core';
import { TennisPlayers } from '../../Model/tennis-players';
import { CommonModule } from '@angular/common';
import { MydateFormatPipe } from '../../Helpers/mydate-format.pipe';



@Component({
  selector: 'app-tennis-players',
  standalone: true,
  imports: [CommonModule, MydateFormatPipe],
  templateUrl: './tennis-players.component.html',
  styleUrl: './tennis-players.component.scss'
})
export class TennisPlayersComponent {

  public playerName = "Federrer";

  public player: TennisPlayers = {
    id: 1,
    name: "Sampras",
    firstName: "Pete",
    birthDate:new Date(1971, 7, 12),
};


}
