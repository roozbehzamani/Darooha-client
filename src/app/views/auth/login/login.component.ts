import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/core/_services/auth/auth.service';
import { User } from 'src/app/data/models/userPanel/user';




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

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.model.isremember = true;
    this.model.granttype = 'password';
    this.route.queryParams.subscribe(params => this.returnUrl = params.return);
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobPhone: new FormControl('', [Validators.required]),
      // tslint:disable-next-line:max-line-length
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50), this.findCombinationLettersAndNumbers()])
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
        this.model.username = this.user.mobPhone;
        this.model.password = this.registerForm.controls.password.value;
        this.model.isremember = true;
        this.model.granttype = 'password';
        this.authService.login(this.model).subscribe(() => {
          this.router.navigate(['/panel/user/dashboard']);
        }, error => {
          this.alertService.warning(error, 'خطا در ورود');
        });
      });
    } else {
      this.alertService.warning('اطلاعات را درست وارد کنید و قوانین را تایید کنید', 'خطا');
    }
  }

  public findCombinationLettersAndNumbers(): ValidatorFn {

    return (c: AbstractControl): { [key: string]: boolean } | null => {

      let isDigit = false;
      let isCapsOrSmallLetter = false;
      // let isSmallLetter = false;
      // let isSpecialChar = false;
      if ((!/\d/.test(c.value))) {
        this.alertService.warning('رمز باید شامل عدد باشد');
        isDigit = false;
      } else {
        isDigit = true;
      }
      if (!/[A-Za-z]/.test(c.value)) {
        this.alertService.warning('رمز باید شامل حروف بزرگ و کوچک انگلیسی باشد');
        isCapsOrSmallLetter = false;
      } else {
        isCapsOrSmallLetter = true;
      }
      // if (!/[a-z]/.test(c.value)) {
      //     isSmallLetter = false;
      // } else {
      //     isSmallLetter = true;
      // }

      // if (!/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(c.value)) {
      //   isSpecialChar = true;
      // }

      if (isDigit && isCapsOrSmallLetter) {
        // null is required here. otherwise form wonot submit.
        return null;
      }
      return { passwordval: true };

    };
  }
}
