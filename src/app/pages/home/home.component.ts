import { Component, OnInit } from '@angular/core';
import { HistoryService } from "src/app/services/history.service";
import { History } from "../../models/history";
import { BookmarksService } from "src/app/services/bookmarks.service";
import { Bookmarks } from "src/app/models/bookmarks";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  url: String;
  clicked: boolean = false;
  reloadingConfirm: boolean = true;
  refresh: boolean = false;
  oldUrl: String;
  public videoId = 0;

  constructor(   private historyService: HistoryService,
    private bookmarksService: BookmarksService) { }

  ngOnInit(): void {
    this.videoId = +sessionStorage.getItem("id") ;
    this.videoId ++;
  }
 onClick(url: String): void {
    this.url = url;
    this.oldUrl = url;
    this.clicked = true;
    if (this.reloadingConfirm) {
     
      this.historyService.addVideo({ url } as History).subscribe(history => {
        console.log("done adding vid to history");
      });
      this.reloadingConfirm = false;
    } else {
      this.reloadingConfirm = true;
    }
  }
  inputChanged(newUrl) {
    this.url =newUrl;
  }
  addToBookmarks(url: String): void {
    this.bookmarksService
      .addVideo({ url } as Bookmarks, this.videoId);
      sessionStorage.setItem("id", this.videoId + '');
      this.videoId ++;
      //this.videoId ++;
  }
}
