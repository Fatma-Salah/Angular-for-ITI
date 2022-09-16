import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private http :HttpClient) { }
  getPost():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPostById(postId:number):Observable<any>{
   
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
  //////////////////tv//////////
  getTV(page:number=1):Observable<any>{
    // return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=f286f4eaf7631b3a62748fda4e17b65e&language=en-US');
    // console.log(`api =${this.apiK}`);
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=f286f4eaf7631b3a62748fda4e17b65e&language=en-US&page=${page}`
    );
  }
  getTVById(postId:number):Observable<any>{
   
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}



// //// api tv 
// https://api.themoviedb.org/3/tv/popular?api_key=f286f4eaf7631b3a62748fda4e17b65e&language=en-US&page=1