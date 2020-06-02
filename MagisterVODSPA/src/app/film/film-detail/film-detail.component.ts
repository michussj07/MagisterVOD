import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Film} from '../../_models/film';

import {AlertifyService} from '../../_services/alertify.service';
import {FilmService} from '../../_services/film.service';
import {BuyDialogComponent} from '../buy-dialog/buy-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film: Film;

  constructor(private filmService: FilmService,
              private alertify: AlertifyService,
              private route: ActivatedRoute,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.loadFilm();
  }

  loadFilm() {
    this.filmService.getFilm(+this.route.snapshot.params.id)
      .subscribe((film: Film) => {
        this.film = film;
      }, error => {
        this.alertify.error(error);
      });
  }

  openDialog() {
    let dialogRef = this.dialog.open(BuyDialogComponent);

    dialogRef.afterClosed().subscribe();
  }

}
