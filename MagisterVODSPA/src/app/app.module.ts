import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {AlertifyService} from './_services/alertify.service';
import {UserService} from './_services/user.service';
import { UserIstComponent } from './users/user-ist/user-ist.component';
import {JwtModule} from '@auth0/angular-jwt';
import { FilmsComponent } from './film/films/films.component';
import { MessagesComponent } from './messages/messages.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {AuthGuard} from './_guards/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule, ButtonsModule, PaginationModule, TabsModule} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {ErrorInterceptorProvider} from './_services/error.interceptor.service';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import {UserDetailResolver} from './_resolvers/user-detail.resolver';
import {UserListResolver} from './_resolvers/user-list.resolver';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import {UserEditResolver} from './_resolvers/user-edit.resolver';
import {PreventUnsavedChangesGuard} from './_guards/prevent-unsaved-changes.guard';
import { PhotosComponent } from './users/photos/photos.component';
import {FileUploadModule} from 'ng2-file-upload';
import {FilmsResolver} from './_resolvers/films.resolver';
import {MessagesResolver} from './_resolvers/messages.resolver';
import { UserMessagesComponent } from './users/user-messages/user-messages.component';
import { AboutComponent } from './about/about.component';
import { HomelogComponent } from './homelog/homelog.component';
import {FilmService} from './_services/film.service';
import { FilmCardComponent } from './film/film-card/film-card.component';
import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import {FilmsDetailResolver} from './_resolvers/films-detail.resolver';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BuyDialogComponent } from './film/buy-dialog/buy-dialog.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatTabsModule} from '@angular/material';
import { FaqComponent } from './faq/faq.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    UserIstComponent,
    FilmsComponent,
    MessagesComponent,
    UserCardComponent,
    UserDetailComponent,
    UserEditComponent,
    PhotosComponent,
    UserMessagesComponent,
    AboutComponent,
    HomelogComponent,
    FilmCardComponent,
    FilmDetailComponent,
    BuyDialogComponent,
    FaqComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth'],
      }
    }),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    FileUploadModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,

  ],
  providers: [
    AuthService,
    AlertifyService,
    UserService,
    AuthGuard,
    ErrorInterceptorProvider,
    UserDetailResolver,
    UserListResolver,
    UserEditResolver,
    PreventUnsavedChangesGuard,
    FilmsResolver,
    FilmsDetailResolver,
    MessagesResolver,
    FilmService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BuyDialogComponent,
  ],
})
export class AppModule { }
