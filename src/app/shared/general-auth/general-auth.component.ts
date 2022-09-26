import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
    confirmPassword: ['', [Validators.required, Validators.minLength(7)]]
  })

  loginForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.minLength(7)]],
    password: ['', [Validators.required, Validators.minLength(7)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(7)]]
  })


}
