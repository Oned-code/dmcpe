import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorporateServicesPage } from './corporate-services.page';

const routes: Routes = [
  {
    path: '',
    component: CorporateServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorporateServicesPageRoutingModule {}
