import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies = [
    {
      id: 1,
      title: 'Inception',
      genre: 'Sci-Fi',
      rating: 8.8,
      image: 'https://m.media-amazon.com/images/I/810dtXUoAQL._AC_UF1000,1000_QL80_.jpg',
      review: 'A mind-bending thriller that keeps you on the edge of your seat!',
    },
    {
      id: 2,
      title: 'The Dark Knight',
      genre: 'Action',
      rating: 9.0,
      image: 'https://m.media-amazon.com/images/I/81AJdOIEI2L._AC_UF1000,1000_QL80_.jpg',
      review: 'Heath Ledger’s Joker is a masterpiece of acting!',
    },
    {
      id: 3,
      title: 'Interstellar',
      genre: 'Sci-Fi',
      rating: 8.6,
      image: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_UF1000,1000_QL80_.jpg',
      review: 'A stunning depiction of space and time, deeply emotional.',
    },
    {
      id: 4,
      title: 'Avengers: Endgame',
      genre: 'Superhero',
      rating: 8.4,
      image: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF1000,1000_QL80_.jpg',
      review: 'An epic conclusion to the Marvel saga!',
    },
    {
      id: 5,
      title: 'Joker',
      genre: 'Drama/Thriller',
      rating: 8.5,
      image: 'https://m.media-amazon.com/images/I/71EzXERtIxL._AC_UF1000,1000_QL80_.jpg',
      review: 'A disturbing yet brilliant character study.',
    }
  ];

  constructor() {}

  getMovies() {
    return this.movies;
  }

  getMovie(id: number) {
    return this.movies.find((movie) => movie.id === id);
  }
}


