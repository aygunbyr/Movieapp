import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'}, // homepage is movies
  {path: 'movies/category/:categoryId', component: MoviesComponent, },
  // Route onceligi onemli. movieId daha once olursa create kelimesini bir movieId olarak algilar, sorun cikar
  {path: 'movies/create', component: MovieCreateComponent},
  {path: 'movies/:movieId', component: MovieDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
