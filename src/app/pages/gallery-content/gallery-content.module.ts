import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryContentPageRoutingModule } from './gallery-content-routing.module';

import { GalleryContentPage } from './gallery-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryContentPageRoutingModule
  ],
  declarations: [GalleryContentPage]
})
export class GalleryContentPageModule {}
