import { Injectable } from '@angular/core';
import moviesData from '../../assets/movies.json'; // ✅ Correct import

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: any[] = moviesData; // ✅ Use imported data

  constructor() {}

  getMovies() {
    return this.movies;
  }

  getMovie(id: number) {
    return this.movies.find((movie) => movie.id === id);
  }
}
