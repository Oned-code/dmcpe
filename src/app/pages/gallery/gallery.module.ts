import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryPageRoutingModule } from './gallery-routing.module';

import { GalleryPage } from './gallery.page';
import {ContentHeaderPageModule} from '../content-header/content-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GalleryPageRoutingModule,
        ContentHeaderPageModule
    ],
  declarations: [GalleryPage]
})
export class GalleryPageModule {}
