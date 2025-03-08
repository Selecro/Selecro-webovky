import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VyukaComponent } from './pages/vyukovymod/vyukovymod.component';
import { SlovnikComponent } from './pages/slovnik/slovnik.component';
import { PomuckyComponent } from './pages/pomucky/pomucky.component';
import { NavodyComponent } from './pages/navody/navody.component';
import { VyukovymodDetailComponent } from './pages/vyukovymod/vyukovymod-detail/vyukovymod-detail.component';
import { NavodyDetailComponent } from './pages/navody/navody-detail/navody-detail.component';
import { PrihlaseniComponent } from './pages/prihlaseni/prihlaseni.component';
import { RegistraceComponent } from './pages/registrace/registrace.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { PasswdchangeComponent } from './pages/passwdchange/passwdchange.component';
import { AuthGuard } from './service/auth.guard';
import { CookiesPolicyComponent } from './pages/cookies-policy/cookies-policy.component';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';
import { ReturnAndRefundPolicyComponent } from './pages/return-and-refund-policy/return-and-refund-policy.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'slovnik/:nazevStylu', component: SlovnikComponent },
  { path: 'pomucky/:nazevPomucky', component: PomuckyComponent },
  { path: 'navody', component: NavodyComponent },
  { path: 'vyukovymod', component: VyukaComponent },
  { path: 'vyukovymod/vyukovymod-detail/:nazevVyuky', component: VyukovymodDetailComponent },
  { path: 'navody/navody-detail/:nazevNavodu', component: NavodyDetailComponent },
  { path: 'prihlaseni', component: PrihlaseniComponent, canActivate: [AuthGuard] },
  { path: 'registrace', component: RegistraceComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'verification', component: VerificationComponent },
  { path: 'passwdchange', component: PasswdchangeComponent },
  { path: 'cookies-policy', component: CookiesPolicyComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'return-and-refund-policy', component: ReturnAndRefundPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true})], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
