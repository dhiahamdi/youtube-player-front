import { Bookmarks } from './../models/bookmarks';

import { Injectable } from '@angular/core';

import {LocalStorageService} from 'ngx-localstorage';
@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  

  constructor(public storageService: LocalStorageService) { }
   
    
   
    
   getBookmarks(): Bookmarks[]{
    let bookmarks = [];
    const id= +sessionStorage.getItem('id');
    for( let i=1;i<=id;i++){
      bookmarks.push( {id:i, url: localStorage.getItem(i+'')} );
    }
      return bookmarks;
   }


    addVideo(video: Bookmarks,id: number){
      localStorage.setItem(id +'',video.url);
      console.log("url: " + video.url + ' we l key' + id);
    }

}
