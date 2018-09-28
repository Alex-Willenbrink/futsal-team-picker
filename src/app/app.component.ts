import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  playerPool: string[] = [];

  constructor() {
  }

  updatePlayerPool(updatedPlayerPool: string[]): void {
    this.playerPool = updatedPlayerPool;
    console.log("playerPool: ", this.playerPool);
  }
}
