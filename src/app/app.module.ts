import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "./material.module";

import { AppComponent } from "./app.component";
import { PlayerPoolComponent } from "./player-pool/player-pool.component";
import { CreateTeamsComponent } from "./create-teams/create-teams.component";

@NgModule({
  declarations: [
    AppComponent,
    PlayerPoolComponent,
    CreateTeamsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
