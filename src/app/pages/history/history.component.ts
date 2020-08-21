import { Component, OnInit } from '@angular/core';
import { HistoryService } from "src/app/services/history.service";
import { History } from "../../models/history";
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  videos: History[];
  constructor(private historyService: HistoryService ) {}


  ngOnInit(): void {
    this.getHistory();
  }
  
  getHistory(): void {
    this.historyService.getHistory().subscribe(history => {
      this.videos = history;
    });
  }
  
}
