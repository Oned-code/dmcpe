import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentHeaderPage } from './content-header.page';

const routes: Routes = [
  {
    path: '',
    component: ContentHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentHeaderPageRoutingModule {}
