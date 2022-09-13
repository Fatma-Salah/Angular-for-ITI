import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.css']
})
export class MovieRatingComponent implements OnInit, OnChanges {
@Input() rating!:number; 
clipWidth :number =75;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.clipWidth=this.rating*75/5;
  }

}
