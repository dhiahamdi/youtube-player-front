import { PlayerModule } from './components/player.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HistoryComponent } from './pages/history/history.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { HttpClientModule } from "@angular/common/http";
import {NgxLocalStorageModule } from 'ngx-localstorage';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchbarComponent,
    HistoryComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PlayerModule,
    HttpClientModule,
    NgxLocalStorageModule.forRoot()
    
  ],
  bootstrap: [AppComponent],
  providers: [
    
  ]
})
export class AppModule { }
