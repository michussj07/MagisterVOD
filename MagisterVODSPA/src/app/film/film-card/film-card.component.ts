import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../_models/film';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() film: Film;

  constructor() { }

  ngOnInit(): void {
  }

}
