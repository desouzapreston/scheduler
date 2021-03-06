import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
// import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(private angularFirestore: AngularFirestore, public afAuth: AngularFireAuth,
    public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async  login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['app-list-vehicles']);
    } catch (e) {
      alert("Error!" + e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

}

// var actionCodeSettings = {
//   // URL you want to redirect back to. The domain (www.example.com) for this
//   // URL must be whitelisted in the Firebase Console.
//   url: 'http://localhost:4200/login',
//   // This must be true.
//   handleCodeInApp: true,
//   iOS: {
//     bundleId: 'com.example.ios'
//   },
//   android: {
//     packageName: 'com.example.android',
//     installApp: true,
//     minimumVersion: '12'
//   },
//   dynamicLinkDomain: 'example.page.link'
// };