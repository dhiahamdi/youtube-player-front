import { Component, OnInit } from '@angular/core';
import { Bookmarks } from "src/app/models/bookmarks";
import { BookmarksService } from "src/app/services/bookmarks.service";
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  videos: Bookmarks[];
  constructor(private bookmarksService: BookmarksService) { }
 
  ngOnInit(): void {
    this.getBookmarks();
  }
  getBookmarks(): void {
 
    this.videos = this.bookmarksService.getBookmarks();
  }
}
