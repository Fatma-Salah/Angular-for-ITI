import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { TVComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'movies',component:ProductComponent},
  {path:'tvs',component:TVComponent},
  {path:'animations',component:AnimationComponent},
  {path:'tvs/:id',component:MoviesdetailsComponent},
  {path:'',redirectTo:'movies',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
