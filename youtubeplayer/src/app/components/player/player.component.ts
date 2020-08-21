
import { Component, OnInit , Input, SimpleChanges} from '@angular/core';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() url:String;
  id: String;

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    this.id = this.url.split("=")[1];
    console.log(this.url);
  }
  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }
}
