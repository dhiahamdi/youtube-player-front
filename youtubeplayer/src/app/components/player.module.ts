import { NgModule } from "@angular/core";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { FormsModule } from '@angular/forms'; 
import {PlayerComponent } from "./player/player.component";

@NgModule({
  imports: [YouTubePlayerModule, FormsModule],
  declarations: [PlayerComponent],
  exports: [PlayerComponent]
})
export class PlayerModule {}
