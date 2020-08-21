import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { History } from "../models/history";
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private baseUrl = "http://127.0.0.1:8000/history/";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) { }


  getHistory(): Observable<History[]> {
    return this.http.get<History[]>(this.baseUrl).pipe(
      tap(_ => console.log("fetched history")),
      catchError(this.handleError<History[]>("getHistory", []))
    );
  }

  addVideo(video: History): Observable<History> {
    // localStorage.setItem('id',video.url);
    return this.http.post<History>(this.baseUrl, video, this.httpOptions).pipe(
      tap((newVideo: History) =>
        console.log("video added")
      ),
      catchError(this.handleError<History>("addVideo"))
    );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //   this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
