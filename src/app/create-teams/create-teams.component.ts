import { Component, OnInit, Input } from "@angular/core";
import { PlayerService } from "../player.service";

@Component({
  selector: "create-teams",
  templateUrl: "./create-teams.component.html",
  styleUrls: ["./create-teams.component.css"]
})
export class CreateTeamsComponent implements OnInit {
  teams: { A: string[]; B: string[] } = { A: [], B: [] };

  @Input() playerPool: string[];
  playerList: any;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.playerList$.subscribe(playerList => {
      this.playerList = playerList;
    });
  }

  pickTeams(): void {
    this.teams = this.playerService.pickTeams(this.playerPool, this.playerList);
  }

}
