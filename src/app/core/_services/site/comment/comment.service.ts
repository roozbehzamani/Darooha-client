import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommentForSend } from 'src/app/data/models/site/comment-for-send';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = environment.apiUrl + environment.apiV1 + 'site/app/';
  userId: string;

  constructor(
    private http: HttpClient,
    private store: Store<fromStore.State>
  ) {
    this.store.select(fromStore.getUserId).subscribe(data => {
      this.userId = data;
    });
  }

  getAllComments(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl + 'Home/Comment/' + id);
  }
  addComment(id: string, model: CommentForSend, userId: string = this.userId): Observable<Comment> {
    return this.http.post<Comment>(this.baseUrl + 'Home/' + userId + '/Comment/' + id, model);
  }
}
