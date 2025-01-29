import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CommonModule } from '@angular/common'; // ✅ Add this!

@NgModule({
  declarations: [AppComponent, MovieListComponent],
  imports: [BrowserModule, CommonModule], // ✅ Import here
  bootstrap: [AppComponent],
})
export class AppModule {}
