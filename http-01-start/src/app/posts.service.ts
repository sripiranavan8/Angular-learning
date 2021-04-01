import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        this.http.post<{ name: string }>
            ('https://angular-guide-20d9f-default-rtdb.firebaseio.com/posts.json', postData,
                {
                    observe: 'response'
                }
            ).subscribe(data => {
                console.log(data)
            }, error => {
                this.error.next(error.error.error);
            });
    }

    fetchPosts() {
        let searchParam = new HttpParams();
        searchParam = searchParam.append('print', 'pretty');
        searchParam = searchParam.append('name', 'sri');
        return this.http.get<{ [key: string]: Post }>
            ('https://angular-guide-20d9f-default-rtdb.firebaseio.com/posts.json',
                {
                    headers: new HttpHeaders({ 'Custom-Header': 'Sripiranavan' }),
                    params: searchParam,
                    responseType: 'json'
                }
            )
            .pipe(map(responseData => {
                const postArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postArray.push({ ...responseData[key], id: key });
                    }
                }
                return postArray;
            }), catchError(errorRes => {
                return throwError(errorRes);
            }));
    }

    deletePosts() {
        return this.http.delete('https://angular-guide-20d9f-default-rtdb.firebaseio.com/posts.json',
            {
                observe: 'events',
                responseType: 'text'
            }
        ).pipe(tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Response) {
                console.log(event.body)
            }
        }));
    }
}