import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: any = '';
  registerForm: FormGroup;
  user: User;

  constructor(private authService: AuthService, private router: Router,
              private alertService: ToastrService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.model.isremember = true;
    this.model.granttype = 'password';
    this.route.queryParams.subscribe(params => this.returnUrl = params.return);
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobPhone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
    });
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      if (this.returnUrl === null || this.returnUrl === undefined) {
        this.returnUrl = this.authService.getDashboardUrl();
      }
      this.router.navigate([this.returnUrl]);
      this.alertService.success('با موفقیت وارد شدید', 'موفق');
    }, error => {
      this.alertService.error(error, 'خطا در ورود');
    });
  }

  passMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('rePassword').value ? null : { mismatch: true };
  }
  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.alertService.success('با موفقیت ثبت نام شدید', 'موفق');
      }, error => {
        this.alertService.error(error, 'خطا در ثبت نام');
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/panel/dashboard']);
        }, error => {
          this.alertService.warning(error, 'ثبت نام موفق خطا در ورود');
        });
      });
    } else {
      this.alertService.warning('اطلاعات را درست وارد کنید و قوانین را تایید کنید', 'خطا');
    }
  }

}
