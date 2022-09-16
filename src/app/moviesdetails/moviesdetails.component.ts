import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.css']
})
export class MoviesdetailsComponent implements OnInit {

  movie!:any
  isLoading:boolean=true;
  constructor(private route:ActivatedRoute,private movservs:MoviesService) { }

  ngOnInit(): void {
    let id=Number(this.route.snapshot.paramMap.get('id'))
    this.movservs.getMovieById(id).subscribe({next:(movieData)=>{
        this.movie=movieData;
        console.log(this.movie);
        
        this.isLoading=false;
    }})
  }

}
