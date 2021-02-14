import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {ServicesPageModule} from '../services/services.module';
import {ServiceContentPageModule} from '../service-content/service-content.module';
import {FooterPageModule} from '../footer/footer.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        ServicesPageModule,
        ServiceContentPageModule,
        FooterPageModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
