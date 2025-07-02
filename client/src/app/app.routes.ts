import { Routes } from '@angular/router';
import { RunTestPageComponent } from './pages/private/run-test-page/run-test-page.component';
import { TestsPageComponent } from './pages/private/tests-page/tests-page.component';
import { PrivateKeysPageComponent } from './pages/private/private-keys-page/private-keys-page.component';

export const routes: Routes = [
  { path: '', component: TestsPageComponent },
  { path: 'run/:id', component: RunTestPageComponent },
  { path: 'private-keys', component: PrivateKeysPageComponent },
];
