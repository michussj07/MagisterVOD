import { Component, OnInit } from '@angular/core';
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

  constructor(private filmService: FilmService,
              private route: ActivatedRoute,
              private alertify: AlertifyService) { }

  ngOnInit() {
  this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms().subscribe(( films: Film[]) => {
        this.films = films;
      }, error => {
        this.alertify.error(error);
      });
  }
}
