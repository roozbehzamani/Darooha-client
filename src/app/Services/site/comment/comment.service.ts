import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommentForSend } from 'src/app/models/comment-for-send';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = environment.apiUrl + environment.apiV1 + 'site/app/';
  constructor(private http: HttpClient) { }

  getAllComments(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl + 'Home/Comment/' + id);
  }
  addComment(id: string, userId: string, model: CommentForSend): Observable<Comment> {
    return this.http.post<Comment>(this.baseUrl + 'Home/' + userId + '/Comment/' + id, model);
  }
}
