import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';
import {Router} from '@angular/router';
declare let alertify: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  photoUrl: string;

  constructor(public authService: AuthService,
              private alertifyService: AlertifyService,
              private router: Router) { }

  ngOnInit(){
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl)
  }

  login(){
    this.authService.login(this.model).subscribe( next => {
      this.alertifyService.success("Logowanie zakończone sukcesem!!");
    }, error => {
      this.alertifyService.error("Wystąpił błąd w logowaniu");
    }, () =>{
      this.router.navigate(["/homelog"]);
    });

  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertifyService.message("Zostałeś wylogowany");
    this.router.navigate(["/home"]);
  }

}
