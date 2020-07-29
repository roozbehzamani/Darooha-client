import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { ProfileComponent } from '../components/panel/components/user/components/profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedGuard implements CanDeactivate<ProfileComponent> {

  canDeactivate(component: ProfileComponent) {
    return true;
  }
}
