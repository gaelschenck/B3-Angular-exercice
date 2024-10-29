import { Component } from '@angular/core';
import { TennisPlayers } from '../../Model/tennis-players';
import { CommonModule } from '@angular/common';
import { MydateFormatPipe } from '../../Helpers/mydate-format.pipe';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Address } from '../../Model/address';




@Component({
  selector: 'app-tennis-players',
  standalone: true,
  imports: [CommonModule, MydateFormatPipe, FormsModule, ReactiveFormsModule],
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
    address: new Address()
  };
  // Partie Form
  playerForm = new FormGroup({
    firstName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl('')
    })
  });
  onSubmit() {
    console.log(this.playerForm.value);
  };
  playerbForm: FormGroup;
  constructor(private fb:FormBuilder){
    this.playerbForm = this.fb.group({
      name: [''],
      firstName:[''],
      birthDate:[''],
      Address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      })
      
    });
  }
  ngOnInit(){
    this.playerbForm.setValue({
      name:'Pouic',
      firstName: 'LePiou',
      birthDate:new Date(1,1,1),
      Address: {
        street:'5 rue de la paix',
        city : 'Rio',
        state : 'France',
        zip: '22222'
      }
    })
    console.log(this.playerbForm.value);
  }
  onSubmitb(){
    if(this.playerbForm.valid){
      console.log(this.playerbForm.value);
    }
  }
  get name() {return this.playerbForm.get('name');}
  get firstName() {return this.playerbForm.get('firstName');}
  get birthDate() {return this.playerbForm.get('birthDate');}
  get street() {return this.playerbForm.get('street');}
  get city() {return this.playerbForm.get('city');}
  get address() {return this.playerbForm.get('Address');}
  get state() {return this.playerbForm.get('state');}
  get zip() {return this.playerbForm.get('zip');}


}
