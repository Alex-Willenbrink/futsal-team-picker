import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as shuffle from 'shuffle-array';

@Component({
  selector: 'player-pool',
  templateUrl: './player-pool.component.html',
  styleUrls: ['./player-pool.component.css']
})
export class PlayerPoolComponent implements OnChanges {
  @Input() playerList: any;
  @Output() createTeams: EventEmitter<string[]> = new EventEmitter();
  playerAutocompleteControl: FormControl;
  playerOptions: string[] = [];
  filteredPlayerOptions: Observable<string[]>;
  playerPool: string[] = [];

  constructor() {
    this.playerAutocompleteControl = new FormControl('');
    this.filteredPlayerOptions = this.playerAutocompleteControl.valueChanges.pipe(map(value => {
      return this.playerOptions.filter(player => {
        return this.playerPool.indexOf(player) === -1;
      }).filter(player => player.toLowerCase().includes(value.toLowerCase()));
    }));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.playerOptions = shuffle(Object.keys(this.playerList));
  }

  isValidPlayer(filteredPlayers): boolean {
    const player = this.playerAutocompleteControl.value;
    return !(filteredPlayers && filteredPlayers.length === 1 && player === filteredPlayers[0]);
  }

  addPlayer(): void {
    const player = this.playerAutocompleteControl.value;
    this.playerPool.push(player);
    this.playerAutocompleteControl.setValue('');
  }

  removePlayerFromPool(removedPlayer): void {
    this.playerPool = this.playerPool.filter(player => player !== removedPlayer);
  }

  onCreateTeams(): void {
    this.createTeams.emit(this.playerPool);
  }

}
