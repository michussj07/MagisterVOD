import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Film} from '../_models/film';
import {Observable} from 'rxjs';
import {PaginationResult} from '../_models/pagination';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFilms(page?, itemsPerPage?): Observable<PaginationResult<Film[]>> {

    const paginationResult: PaginationResult<Film[]> = new PaginationResult<Film[]>();
    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http.get<Film[]>(this.baseUrl + 'films', { observe: 'response', params })
  .pipe(
      map(response => {
        paginationResult.result = response.body;

        if (response.headers.get('Pagination') != null) {
          paginationResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }

        return paginationResult;
      })
    );
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(this.baseUrl + 'films/' + id);
  }
}
