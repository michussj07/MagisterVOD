import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../_models/film';
import {FilmService} from '../_services/film.service';
import {ActivatedRoute} from '@angular/router';
import {AlertifyService} from '../_services/alertify.service';
import {BuyDialogComponent} from '../film/buy-dialog/buy-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-homelog',
  templateUrl: './homelog.component.html',
  styleUrls: ['./homelog.component.css']
})
export class HomelogComponent implements OnInit {

  films: Film[];
  @Input() film: Film;
  order: string = 'created';
  order1: string = 'toDelete';
  filter : any = { genre: 'dramat'};
  filter1 : any = {
    rating: {
      $or: ['9,3/10', '8,6/10', '8,5/10', '8,3/10', '8,0/10']
    }
  };


  constructor(private filmService: FilmService,
              private route: ActivatedRoute,
              private alertify: AlertifyService,
              private dialog: MatDialog) { }

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

  openDialog() {
    let dialogRef = this.dialog.open(BuyDialogComponent);

    dialogRef.afterClosed().subscribe();
  }



}
