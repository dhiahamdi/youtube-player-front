import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
 
   url :string 
  @Output() newItemEvent = new EventEmitter<string>();

  onChange() {
    this.newItemEvent.emit(this.url);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
