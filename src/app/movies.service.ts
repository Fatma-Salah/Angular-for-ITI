// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MoviesService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiK: string = 'f286f4eaf7631b3a62748fda4e17b65e';
  constructor(private http: HttpClient) {}



  getMovieById(id:number):Observable<any>{
    return this.http.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiK}&language=en-US`);
  }

 
}
