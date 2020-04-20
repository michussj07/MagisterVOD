import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {UserService} from '../../_services/user.service';
import {AlertifyService} from '../../_services/alertify.service';
import {ActivatedRoute} from '@angular/router';
import {Pagination, PaginationResult} from '../../_models/pagination';

@Component({
  selector: 'app-user-ist',
  templateUrl: './user-ist.component.html',
  styleUrls: ['./user-ist.component.css']
})
export class UserIstComponent implements OnInit {

  users: User[];
  user: User = JSON.parse(localStorage.getItem('user'));
  genderList = [{value: 'mężczyzna', display: 'Meżczyźni'},
    {value: 'kobieta', display: 'Kobiety'}];
  userParams: any = {};
  pagination: Pagination;

  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.users = data.users.result;
      this.pagination = data.users.pagination;
    });
    this.userParams.gender = this.user.gender === 'kobieta' ? 'mężczyzna' : 'kobieta';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 90;
    this.userParams.orderBy = 'lastActive';
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }

  resetFilters() {
    this.userParams.gender = this.user.gender === 'kobieta' ? 'mężczyzna' : 'kobieta';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 90;
    this.userParams.orderBy = 'lastActive';
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
      .subscribe((res: PaginationResult<User[]>) => {
        this.users = res.result;
        this.pagination = res.pagination;
      }, error => {
        this.alertify.error(error);
      });
  }
}
