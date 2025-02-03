// movie.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  readJsonFile(file: File): Observable<any[]> {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        try {
          const jsonData = JSON.parse(event.target.result);
          observer.next(jsonData);
        } catch (error) {
          observer.error('Error parsing JSON');
        }
      };
      reader.readAsText(file); // Read the file as text
    });
  }
}
