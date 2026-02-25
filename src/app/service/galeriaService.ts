import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GaleriaService {
  imagenes$: Observable<string[]>;

  constructor(private http: HttpClient) {
    this.imagenes$ = this.http
      .get<string[]>('assets/galeria/imagenes.json') // JSON con nombres de archivos
      .pipe(
        map((files) => files.map((f) => `assets/galeria/${f}`)), // Genera rutas completas
        shareReplay(1), // Cachea el resultado para que no se vuelva a cargar
      );
  }
}
