import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { UserService } from 'src/app/core/_services/panel/user/user.service';
import { User } from 'src/app/data/models/userPanel/user';
import { Store } from '@ngrx/store';

import * as fromStore from '../../../../../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: User;
  photoUrl$: Observable<string>;
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl + environment.apiV1;
  @ViewChild('editForm', { static: false }) editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])

  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: ToastrService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private store: Store<fromStore.State>
  ) { }

  ngOnInit() {
    this.photoUrl$ = this.store.select(fromStore.getLoggedUserPhotoUrl);
    this.loadUser();
    this.initializeUplaoder();
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  loadUser() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }
  updateUserInfo() {
    this.userService.updateUserInfo(this.user).subscribe(next => {
      this.alertService.success('اطلاعات کاربری با موفقیت ویرایش شد', 'موفق');
      this.editForm.form.markAsPristine();
      this.router.navigate(['/panel/profile']);
      this.store.dispatch(new fromStore.UpdateInfoLoggedUserName(this.user));
    }, error => {
      this.alertService.error(error, 'خطا در ویرایش');
    });
  }
  initializeUplaoder() {
    let userId = '';
    this.store.select(fromStore.getUserId).subscribe(data => {
      userId = data;
    });
    this.uploader = new FileUploader({
      url: this.baseUrl + 'site/panel/users/' + userId + '/photos/' + userId,
      authToken: 'Bearer ' + localStorage.getItem('token'),
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024,
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        this.alertService.success('عکس با موفقیت ارسال شد', 'موفق');
        const res: User = JSON.parse(response);
        this.store.dispatch(new fromStore.EditLoggedUserPhotoUrl(res.imageURL));
      }
    };
  }
}
