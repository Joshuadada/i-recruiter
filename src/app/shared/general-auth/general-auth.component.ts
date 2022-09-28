import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ConfirmPasswordValidator } from '../../../services/validators/confirm-password.validator'

@Component({
  selector: 'app-general-auth',
  templateUrl: './general-auth.component.html',
  styleUrls: ['./general-auth.component.scss']
})
export class GeneralAuthComponent implements OnInit {


  date: Date = new Date()
  @Input() status!: string
  register = false;
  login = true;

  toggleToRegister(){
    this.register = true;
    this.login = false
  }
  toggleToLogin(){
    this.login = true;
    this.register = false
  }
  constructor(private firebaseService:FirebaseService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(`(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validator: ConfirmPasswordValidator
  })

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })


}
