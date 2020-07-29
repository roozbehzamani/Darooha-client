import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import {  FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/panel/user.service';
import { AuthService } from 'src/app/Services/auth/auth.service';

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
