import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { ProfileComponent } from 'src/app/views/panel/pages/user/pages/profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedGuard implements CanDeactivate<ProfileComponent> {

  canDeactivate(component: ProfileComponent) {
    return true;
  }
}
