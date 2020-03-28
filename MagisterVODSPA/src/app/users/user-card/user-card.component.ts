import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../_models/user';
import {UserService} from '../../_services/user.service';
import {AuthService} from '../../_services/auth.service';
import {AlertifyService} from '../../_services/alertify.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService,
              private authService: AuthService,
              private alertify: AlertifyService) { }

  ngOnInit() {
  }

}
