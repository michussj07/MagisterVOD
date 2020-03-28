import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {UserEditComponent} from '../users/user-edit/user-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<UserEditComponent> {


  canDeactivate(component: UserEditComponent){
    if (component.editForm.dirty){
        return confirm('Jesteś pewien, że chcesz kontynować? Wszystkie zmiany zostaną niezapisane');
    }
    return true;
  }


}
