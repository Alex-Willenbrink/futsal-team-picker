import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import * as shuffle from "shuffle-array";

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  playerList$: Observable<any>;
  playerOptions$: Observable<any>;

  constructor(private http: HttpClient) {
    this.playerList$ = this.http.get("http://localhost:4200/assets/players-list.json");
    this.playerOptions$ = this.playerList$.pipe(map(playerList => {
      return shuffle(Object.keys(playerList));
    }));
  }

  pickTeams(playerPool: string[], playerList: any): { A: string[]; B: string[] } {
    const teams = { A: [], B: [] };

    let teamTurn = 0;
    let playersPicked = 0;

    for (let i = 5; i > 0; i--) {
      const playerGroup = this.getPlayersOfRating(i, playerPool, playerList);
      playerPool = playerPool.filter(player =>
        playerGroup.indexOf(player) === -1
      );
      shuffle(playerGroup);

      while (playerGroup.length > 0) {
        const pickedPlayer = playerGroup.pop();

        if (playersPicked === 0) {
          teams["A"].push(pickedPlayer);
        } else if ([1, 2].indexOf(playersPicked) !== -1) {
          teams["B"].push(pickedPlayer);
        } else if (teamTurn === 0) {
          teams["A"].push(pickedPlayer);
          teamTurn++;
        } else {
          teams["B"].push(pickedPlayer);
          teamTurn--;
        }
        playersPicked++;
      }
    }
    shuffle(teams["A"]);
    shuffle(teams["B"]);
    return teams;

  }

  getPlayersOfRating(rating: number, playerPool: string[], playerList: any): string[] {
    return playerPool.filter(player => {
      return rating === playerList[player];
    });
  }
}
