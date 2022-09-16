import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PostsServiceService } from '../posts-service.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent implements OnInit {
  length: number=35020;
  currentPage: number=1;
  pageSize!:number;
 
private SearchValue:any='';
moviesData:any[]=[];

filterMovies=this.moviesData;

get searchValue():number{
   return this.SearchValue;
}
set searchValue(val:number){
    this.SearchValue =val;
   this.performSearch(val)
}


arr:any[]=[]
performSearch(value:number){
   this.service.getTVById(value).subscribe({
     next:(data)=>{
      console.log(data);
        this.arr.push(data.results) ;
        this.filterMovies=this.arr;
   }})
  }

toggleDate(movieId:number):void{
this.moviesData.filter(function(movie){
  if(movie.id==movieId){
    movie.isVisiable=!movie.isVisiable;
  }
})
// this.singleMovie.isVisiable=!this.singleMovie.isVisiable;
}


constructor(private service:PostsServiceService){}
ngOnInit(): void {
this.service.getTV().subscribe({
   next:(data)=>{
   console.log(data.results);
   this.moviesData=data.results ;
   
   this.filterMovies=data.results;
   
  //  console.log(this.moviesData);
   
}})


}
onPageChange(pageData:PageEvent){
  this.currentPage = pageData.pageIndex+1;
  this.service.getTV(this.currentPage).subscribe({
    next:(data)=>{
    console.log(data.results);
    this.moviesData=data.results ;
    
    this.filterMovies=data.results;
    
    // console.log(this.currentPage);
    
 }})
}




}