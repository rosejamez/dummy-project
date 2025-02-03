import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  providers: [MovieService], // ✅ Ensure service is provided
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  selectedMovie: any = null;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies(); // ✅ Fetch movies
  }

  openReview(movie: any) {
    this.selectedMovie = movie; // ✅ Set selected movie for pop-up
  }

  closeReview() {
    this.selectedMovie = null; // ✅ Close pop-up
  }
}
