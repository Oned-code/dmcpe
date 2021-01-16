import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
    private asf: AngularFirestore;

  constructor() { }

  uploadFile(fi) {
    // File or Blob named mountains.jpg
    const file: Blob | ArrayBuffer | any = fi;

// Create the file metadata
    const metadata = {
      contentType: 'image/jpeg'
    };
// create storage ref
    const storageRef = firebase.storage().ref();

// Upload file and metadata to the object 'images/mountains.jpg'
    const uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

// Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, (error) => {

          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;

            case 'storage/canceled':
              // User canceled the upload
              break;

            case 'storage/unknown':
              // unknown storage
              break;
            default:
              // Unknown error occurred, inspect error.serverResponse
    break;
          }
        }, () => {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            const user = firebase.auth().currentUser;
            const userRef: AngularFirestoreDocument<User> = this.asf.doc(`users/${user.uid}`);
            const data: User = {
                  uid: user.uid,
                  email: user.email,
                  tel: 0,
                  mobile: 0,
                  displayName: user.displayName,
                  avatar: downloadURL
              };
            userRef.set(data, { merge: true }).then((res) => {
                console.log(res);
            });
          });
        });
  }
}
