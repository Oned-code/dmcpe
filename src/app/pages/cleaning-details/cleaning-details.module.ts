import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDetailsPageRoutingModule } from './cleaning-details-routing.module';

import { ServiceDetailsPage } from './cleaning-details.page';
import {ContentHeaderPageModule} from '../content-header/content-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServiceDetailsPageRoutingModule,
        ContentHeaderPageModule
    ],
  declarations: [ServiceDetailsPage]
})
export class ServiceDetailsPageModule {}
