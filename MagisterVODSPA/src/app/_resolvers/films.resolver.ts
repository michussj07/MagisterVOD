import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {FilmService} from '../_services/film.service';
import {Film} from '../_models/film';

@Injectable()
export class FilmsResolver implements Resolve<Film[]> {

  pageNumber = 1;
  pageSize = 10;
  filmsParam = 'UserFilms';

  constructor(private filmService: FilmService,
              private router: Router,
              private alertify: AlertifyService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Film[]> {
    return this.filmService.getFilms(this.pageNumber, this.pageSize).pipe(
      catchError(error => {
        this.alertify.error('Problem z pobraniem danych');
        this.router.navigate(['']);
        return of(null);
      })
    );
  }
}
