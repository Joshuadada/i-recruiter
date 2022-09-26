import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false;
  constructor(private auth: AngularFireAuth) { }
  async signin(email: string, password: string){
     await this.auth.signInWithEmailAndPassword(email, password)
     .then(res => {
       this.isLoggedIn = true;
       localStorage.setItem('user', JSON.stringify(res.user))
     })
  }
  async signup(email: string, password: string){
    await this.auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    })
 }
 logout(){
   this.auth.signOut();
   localStorage.removeItem('user')
 }
}
