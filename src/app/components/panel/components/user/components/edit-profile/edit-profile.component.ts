import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/panel/user.service';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: User;
  photoUrl: string;
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl + environment.apiV1;
  @ViewChild('editForm', {static: false}) editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private router: Router, private userService: UserService, private alertService: ToastrService,
              private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(pu => this.photoUrl = pu);
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
    this.userService.updateUserInfo(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.alertService.success('اطلاعات کاربری با موفقیت ویرایش شد', 'موفق');
      this.editForm.form.markAsPristine();
      this.router.navigate(['/panel/profile']);
    }, error => {
      this.alertService.error(error, 'خطا در ویرایش');
    });
  }
  initializeUplaoder() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'site/panel/users/' + this.authService.decodedToken.nameid + '/photos/' + this.authService.decodedToken.nameid,
      authToken: 'Bearer ' + localStorage.getItem('token'),
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024,
    });

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        this.alertService.success('عکس با موفقیت ارسال شد', 'موفق');
        const res: User = JSON.parse(response);
        this.authService.changeUserPhoto(res.imageURL);
        this.authService.currentUser.imageURL = res.imageURL;
        localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
      }
    };
  }
}
