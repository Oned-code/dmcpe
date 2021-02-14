import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorporateServicesPageRoutingModule } from './corporate-services-routing.module';

import { CorporateServicesPage } from './corporate-services.page';
import {ContentHeaderPageModule} from '../content-header/content-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CorporateServicesPageRoutingModule,
        ContentHeaderPageModule
    ],
  declarations: [CorporateServicesPage]
})
export class CorporateServicesPageModule {}
