import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../_models/film';
import {BuyDialogComponent} from '../buy-dialog/buy-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() film: Film;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(BuyDialogComponent);

    dialogRef.afterClosed().subscribe();
  }

}
