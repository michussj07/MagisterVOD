import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {AlertifyService} from '../../_services/alertify.service';

@Component({
  selector: 'app-buy-dialog',
  templateUrl: './buy-dialog.component.html',
  styleUrls: ['./buy-dialog.component.css']
})
export class BuyDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private alertify: AlertifyService,) { }

  ngOnInit() {

  }

  clickMessage() {
    this.alertify.success('Film został zakupiony');
  }

  rejectMessage() {
    this.alertify.warning('Transakcja anulowana');
  }
}
