import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesPageRoutingModule } from './services-routing.module';

import { ServicesPage } from './services.page';
import {ContentHeaderPageModule} from '../content-header/content-header.module';
import {ServiceContentPageModule} from '../service-content/service-content.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServicesPageRoutingModule,
        ContentHeaderPageModule,
        ServiceContentPageModule
    ],
    exports: [
        ServicesPage
    ],
    declarations: [ServicesPage]
})
export class ServicesPageModule {}
