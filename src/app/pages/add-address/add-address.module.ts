import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAddressPageRoutingModule } from './add-address-routing.module';

import { AddAddressPage } from './add-address.page';
import {ContentHeaderPageModule} from '../content-header/content-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddAddressPageRoutingModule,
        ContentHeaderPageModule
    ],
  declarations: [AddAddressPage]
})
export class AddAddressPageModule {}
