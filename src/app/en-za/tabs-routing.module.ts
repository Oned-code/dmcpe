import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'en-za',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../pages/history/history.module').then(m => m.HistoryPageModule)
      },
      {
        path: 'booking',
        loadChildren: () => import('../pages/booking/booking.module').then(m => m.BookingPageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('../pages/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('../pages/about-us/about-us.module').then(m => m.AboutUsPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('../pages/services/services.module').then(m => m.ServicesPageModule)
      },
      {
        path: 'corporate-services',
        loadChildren: () => import('../pages/corporate-services/corporate-services.module').then(m => m.CorporateServicesPageModule)
      },
      {
        path: 'gallery-&-reviews',
        loadChildren: () => import('../pages/gallery/gallery.module').then(m => m.GalleryPageModule)
      },
      {
        path: '',
        redirectTo: '/en-za/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/en-za/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
