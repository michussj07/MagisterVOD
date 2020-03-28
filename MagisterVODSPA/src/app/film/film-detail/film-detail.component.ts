import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../_models/user';
import {Film} from '../../_models/film';

import {AlertifyService} from '../../_services/alertify.service';
import {FilmService} from '../../_services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film: Film;

  constructor(private filmService: FilmService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.filmService.getFilm(+this.route.snapshot.params.id)
      .subscribe((film: Film) => {
        this.film = film;
      }, error => {
        this.alertify.error(error);
      });
  }

}
