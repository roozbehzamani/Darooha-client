import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { UserService } from 'src/app/core/_services/panel/user/user.service';
import { User } from 'src/app/data/models/userPanel/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService, private alertService: ToastrService,
              private authService: AuthService, private formBuilder: FormBuilder) { }
  user: User;
  photoUrl: string;

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(pu => this.photoUrl = pu);
    this.loadUser();
  }

  loadUser() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
   }
}
