import { Routes } from '@angular/router';
import { RunTestPageComponent } from './pages/public/run-test-page/run-test-page.component';
import { TestsPageComponent } from './pages/public/tests-page/tests-page.component';

export const routes: Routes = [
  { path: '', component: TestsPageComponent },
  { path: 'run/:id', component: RunTestPageComponent },
];
