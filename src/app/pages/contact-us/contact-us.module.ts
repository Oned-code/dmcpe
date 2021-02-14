import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUsPageRoutingModule } from './contact-us-routing.module';

import { ContactUsPage } from './contact-us.page';
import {ContentHeaderPageModule} from '../content-header/content-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ContactUsPageRoutingModule,
        ContentHeaderPageModule
    ],
  declarations: [ContactUsPage]
})
export class ContactUsPageModule {}
