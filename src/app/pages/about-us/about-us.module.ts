import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutUsPageRoutingModule } from './about-us-routing.module';

import { AboutUsPage } from './about-us.page';
import {ContentHeaderPageModule} from '../content-header/content-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutUsPageRoutingModule,
    ContentHeaderPageModule
  ],
  declarations: [AboutUsPage]
})
export class AboutUsPageModule {}
