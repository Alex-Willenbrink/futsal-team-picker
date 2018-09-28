import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

import { PlayerService } from '../player.service';

@Component({
  selector: 'player-pool',
  templateUrl: './player-pool.component.html',
  styleUrls: ['./player-pool.component.css']
})
export class PlayerPoolComponent {
  @Output() updatePlayerPool: EventEmitter<string[]> = new EventEmitter();
  playerAutocompleteControl: FormControl;
  playerOptions: string[] = [];
  filteredPlayerOptions: Observable<string[]>;
  playerPool: string[] = [];

  constructor(private playerService: PlayerService) {
    this.playerAutocompleteControl = new FormControl('');
    this.filteredPlayerOptions = combineLatest(this.playerAutocompleteControl.valueChanges, this.playerService.playerOptions$)
      .pipe(map(value => {
        const formControlValue = value[0];
        const playerOptions = value[1];
        return (playerOptions as any).filter(player => {
          return this.playerPool.indexOf(player) === -1;
        }).filter(player => player.toLowerCase().includes((formControlValue as any).toLowerCase()));
      }));
  }

  isValidPlayer(filteredPlayers): boolean {
    const player = this.playerAutocompleteControl.value;
    return !(filteredPlayers && filteredPlayers.length === 1 && player === filteredPlayers[0]);
  }

  addPlayer(): void {
    const player = this.playerAutocompleteControl.value;
    this.playerPool.push(player);
    this.playerAutocompleteControl.setValue('');
    this.updatePlayerPool.emit(this.playerPool);
  }

  removePlayer(removedPlayer): void {
    this.playerPool = this.playerPool.filter(player => player !== removedPlayer);
    this.updatePlayerPool.emit(this.playerPool);
  }
}
