import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  gallery: any[];

  constructor(private afs: AngularFirestore) {
  }
  async getGallery() {
    const self = this;
    const imageList = [];
    const storageRef = firebase.storage().ref('gallery').child('carpentry');
    console.log(storageRef);
    // Now we get the references of these images
    await storageRef.listAll().then((result) => {
      console.log('result', result);
      result.items.forEach((imageRef) => {
        // And finally display them
        displayImage(imageRef);
      });
    }).catch((error) => {
      // Handle any errors
    });

    function displayImage(imageRef) {
      imageRef.getDownloadURL().then((url) => {
        // TODO: Display the image on the UI
        imageList.push(url);
      }).catch((error) => {
        console.log(error);
        // Handle any errors
      });
    }
    console.log(this.gallery);
    this.gallery = imageList;
    return imageList;
  }
}
