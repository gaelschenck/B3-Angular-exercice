import { Component } from '@angular/core';
import { TennisPlayers } from '../../Model/tennis-players';
import { CommonModule } from '@angular/common';
import { MydateFormatPipe } from '../../Helpers/mydate-format.pipe';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-tennis-players',
  standalone: true,
  imports: [CommonModule, MydateFormatPipe, FormsModule,ReactiveFormsModule],
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
  // Partie Form
  playerForm = new FormGroup({
    firstName: new FormControl('')
  });

  onSubmit() {
    console.log(this.playerForm.value);
  };

}
