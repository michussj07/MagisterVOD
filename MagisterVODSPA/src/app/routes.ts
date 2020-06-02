import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';
import {MessagesComponent} from './messages/messages.component';
import {FilmsComponent} from './film/films/films.component';
import {UserIstComponent} from './users/user-ist/user-ist.component';
import {AuthGuard} from './_guards/auth.guard';
import {UserDetailComponent} from './users/user-detail/user-detail.component';
import {UserDetailResolver} from './_resolvers/user-detail.resolver';
import {UserListResolver} from './_resolvers/user-list.resolver';
import {UserEditComponent} from './users/user-edit/user-edit.component';
import {UserEditResolver} from './_resolvers/user-edit.resolver';
import {PreventUnsavedChangesGuard} from './_guards/prevent-unsaved-changes.guard';
import {FilmsResolver} from './_resolvers/films.resolver';
import {MessagesResolver} from './_resolvers/messages.resolver';
import {AboutComponent} from './about/about.component';
import {HomelogComponent} from './homelog/homelog.component';
import {FilmDetailComponent} from './film/film-detail/film-detail.component';
import {FilmsDetailResolver} from './_resolvers/films-detail.resolver';
import {FaqComponent} from './faq/faq.component';



export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  {path:'',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'homelog', component: HomelogComponent},
      { path: 'uzytkownicy', component: UserIstComponent, resolve:{users: UserListResolver}},
      { path: 'uzytkownicy/:id', component: UserDetailComponent, resolve:{user: UserDetailResolver}},
      { path: 'uzytkownik/edycja', component: UserEditComponent,
        canDeactivate: [PreventUnsavedChangesGuard], resolve:{user: UserEditResolver}},
      { path: 'filmy', component: FilmsComponent, resolve:{film: FilmsResolver}},
      { path: 'filmy/:id', component: FilmDetailComponent, resolve:{film: FilmsDetailResolver}},
      { path: 'wiadomosci', component: MessagesComponent, resolve:{messages: MessagesResolver}},
      { path: 'faq', component: FaqComponent},
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];
