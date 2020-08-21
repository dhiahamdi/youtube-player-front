import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { HistoryComponent } from "./pages/history/history.component";
import { BookmarksComponent } from "./pages/bookmarks/bookmarks.component";



const routes: Routes = [

{ path: "home", component: HomeComponent },
{ path: "", redirectTo: "/home", pathMatch: "full" },
{ path: "history", component: HistoryComponent },
{ path: "bookmarks", component: BookmarksComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
