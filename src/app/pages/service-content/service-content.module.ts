import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceContentPageRoutingModule } from './service-content-routing.module';

import { ServiceContentPage } from './service-content.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServiceContentPageRoutingModule
    ],
    exports: [
        ServiceContentPage
    ],
    declarations: [ServiceContentPage]
})
export class ServiceContentPageModule {}
