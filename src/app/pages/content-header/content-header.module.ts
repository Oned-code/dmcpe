import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentHeaderPageRoutingModule } from './content-header-routing.module';

import { ContentHeaderPage } from './content-header.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ContentHeaderPageRoutingModule
    ],
    exports: [
        ContentHeaderPage
    ],
    declarations: [ContentHeaderPage]
})
export class ContentHeaderPageModule {}
