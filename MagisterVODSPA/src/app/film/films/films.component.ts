import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
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
  // pagination: Pagination;

  constructor(private authService: AuthService,
              private filmService: FilmService,
              private route: ActivatedRoute,
              private alertify: AlertifyService) { }

  ngOnInit() {
/*    this.route.data.subscribe(data => {
      this.users = data.users.result;
      this.pagination = data.users.pagination;
    });*/
  this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms()
      .subscribe((films : Film[]) => {
        this.films = films;
        // this.pagination = res.pagination;
      }, error => {
        this.alertify.error(error);
      });
  }

  /*pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }*/

  /*resetFilters() {

  }*/
}
