import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Make sure this line is added

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],  // Include FormsModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
