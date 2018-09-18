import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerList: any = {};

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:4200/assets/players-list.json').subscribe(playerList => {
      console.log('playerList: ', playerList);
      this.playerList = playerList;
    });
  }
}
