import { Component, OnInit } from '@angular/core';
import { Pagination, PaginationResult } from '../../_models/pagination';
import { AuthService } from '../../_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';
import {FilmService} from '../../_services/film.service';
import {Film} from '../../_models/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[];
  pagination: Pagination;

  constructor(private authService: AuthService,
              private filmService: FilmService,
              private route: ActivatedRoute,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.films = data.users.result;
      this.pagination = data.users.pagination;
    });
  // this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms(this.pagination.currentPage, this.pagination.itemsPerPage)
      .subscribe((res : PaginationResult<Film[]>) => {
        this.films = res.result;
        this.pagination = res.pagination;
      }, error => {
        this.alertify.error(error);
      });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadFilms();
  }

  /*resetFilters() {

  }*/
}
