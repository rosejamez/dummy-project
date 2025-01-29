import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';

export const routes: Routes = [ // ✅ Add `export`
  { path: '', component: MovieListComponent },
];
