import { Routes } from '@angular/router';
import { RunTestPageComponent } from './pages/private/run-test-page/run-test-page.component';
import { TestsPageComponent } from './pages/private/tests-page/tests-page.component';
import { PrivateKeysPageComponent } from './pages/private/private-keys-page/private-keys-page.component';
import { HomePageComponent } from './pages/public/home-page/home-page.component';
import { AccountPageComponent } from './pages/private/account-page/account-page.component';
import { OrgPageComponent } from './pages/private/org-page/org-page.component';
import { SignupPageComponent } from './pages/public/signup-page/signup-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'tests', component: TestsPageComponent },
  { path: 'run/:id', component: RunTestPageComponent },
  { path: 'private-keys', component: PrivateKeysPageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'org', component: OrgPageComponent },
  { path: 'signup', component: SignupPageComponent },
];
