import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user.model'; // optional
// import { auth } from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';


import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import firebase from 'firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User>;

  constructor(
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          // Logged in
            console.log(user);
            if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
    );
  }
    async emailSignin(email, password) {
        // const provider = new auth.GoogleAuthProvider();
        // const credential = await this.afAuth.signInWithPopup(provider);
        // return this.updateUserData(credential.user);

        // Using a popup.
        // const provider = new firebase.auth.GoogleAuthProvider();
        // provider.addScope('profile');
        // provider.addScope('email');
        return await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    async googleSignin() {
        // const provider = new auth.GoogleAuthProvider();
        // const credential = await this.afAuth.signInWithPopup(provider);
        // return this.updateUserData(credential.user);

        // Using a popup.
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = firebase.auth().currentUser;
        provider.addScope('profile');
        provider.addScope('email');
        let res = {};
        firebase.auth().signInWithPopup(provider).then((result) => {
            // This gives you a Google Access Token.
            res = result;
            // let token = result.credential.accessToken;
            // // The signed-in user info.
            // let user = result.user;
            console.log(result);
        });
        await this.updateUserData(user);
        return res;
    }

    private updateUserData(user) {
      console.log(user);
        // Sets user data to firestore on login
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      const data: User = {
            uid: user.uid,
            email: user.email,
            tel: 0,
            mobile: 0,
            displayName: user.displayName,
        };
      return userRef.set(data, { merge: true });
    }

    async signOut() {
        await this.afAuth.signOut();
        await this.router.navigate(['/']);
    }

    async createAccount(email: string, password: string) {
        const credential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return this.sendEmailVerification(credential.user);
    }

    async sendEmailVerification(user) {
        // const user = firebase.auth().currentUser;
        let result = {};
        user.sendEmailVerification().then((res: any) => {
            result = res;
            this.updateUserData(user);
            // Email sent.
        }).catch((error) => {
            // An error happened.
        });
        return result;
    }
}
