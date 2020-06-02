import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Film} from '../_models/film';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {


    return this.http.get<Film[]>(this.baseUrl + 'films');
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(this.baseUrl + 'films/' + id);
  }
}
