import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'select-date',
    loadChildren: () => import('./pages/select-date/select-date.module').then( m => m.SelectDatePageModule)
  },
  {
    path: 'cleaning-details',
    loadChildren: () => import('./pages/cleaning-details/cleaning-details.module').then( m => m.ServiceDetailsPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'payment-detail',
    loadChildren: () => import('./pages/payment-detail/payment-detail.module').then( m => m.PaymentDetailPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./pages/add-card/add-card.module').then( m => m.AddCardPageModule)
  },
  {
    path: 'booking-summary',
    loadChildren: () => import('./pages/booking-summary/booking-summary.module').then( m => m.BookingSummaryPageModule)
  },
  {
    path: 'booking-success',
    loadChildren: () => import('./pages/booking-success/booking-success.module').then( m => m.BookingSuccessPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./pages/rating/rating.module').then( m => m.RatingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
