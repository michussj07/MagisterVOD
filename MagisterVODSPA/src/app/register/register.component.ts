import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {User} from '../_models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  user: User;
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  userParams: any = {};

  constructor(private authService: AuthService,
              private alertifyService: AlertifyService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(){
    this.bsConfig = {
      containerClass: 'theme-blue'
    };
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email ]],
      password: ['', [ Validators.required,
        Validators.minLength(4),Validators.maxLength(10)]],
      confirmPassword: ['', Validators.required ],
      gender: ['kobieta'],
      dateOfBirth: [null, Validators.required ],
      city: ['', Validators.required ],
      country: ['', Validators.required ],
    }, {validator: this.passwordMatchValidator});

  }

  passwordMatchValidator(fg: FormControl){
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {mismatch: true};
}

  register() {
    if (this.registerForm.valid)
    {
      this.user = Object.assign({}, this.registerForm.value);

      this.authService.register(this.user).subscribe(() => {
        this.alertifyService.success("Rejestracja udana")
      }, error => {
        this.alertifyService.error(error);
      }, () =>{
        this.authService.login(this.user).subscribe( () => {
          this.router.navigate(['/uzytkownicy']);
        });
      });
    }
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertifyService.warning("Anulowane")
  }

}
