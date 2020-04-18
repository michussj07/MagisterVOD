import { Component, OnInit } from '@angular/core';
import {Film} from '../_models/film';
import {FilmService} from '../_services/film.service';
import {ActivatedRoute} from '@angular/router';
import {AlertifyService} from '../_services/alertify.service';

@Component({
  selector: 'app-homelog',
  templateUrl: './homelog.component.html',
  styleUrls: ['./homelog.component.css']
})
export class HomelogComponent implements OnInit {

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
