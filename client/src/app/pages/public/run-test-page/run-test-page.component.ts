import { TestSet } from './../../../../../../models/test-flow.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { filter, map, ReplaySubject, switchMap } from 'rxjs';
import { TestsetFormComponent } from '../../../components/testset-form/testset-form/testset-form.component';
import { DbService } from '../../../services/db/db.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-run-test-page',
  standalone: true,
  imports: [AsyncPipe, NgIf, TestsetFormComponent, RouterModule],
  templateUrl: './run-test-page.component.html',
  styleUrl: './run-test-page.component.scss',
})
export class RunTestPageComponent {
  dbService = inject(DbService);

  route = inject(ActivatedRoute);

  responseBody$ = new ReplaySubject<SafeHtml>();

  running$ = new ReplaySubject<boolean>();

  testSet$ = this.route.params.pipe(
    map(({ id }) => id),
    filter(Boolean),
    switchMap((id) => this.dbService.getTestById(id))
  );

  private sanitizer = inject(DomSanitizer);

  onTestsetChange(testSet: TestSet) {
    this.dbService.saveById(testSet);
  }

  async runTest(testSet: TestSet) {
    this.running$.next(true);
    const body = JSON.stringify(testSet);

    const request = await fetch('http://localhost:3000/run', {
      method: 'post',
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const responseBody = await request.text();

    const noBlabkBgBody = responseBody
      .replaceAll('background:#000;', 'background:#fff;') // remove black bg
      .replaceAll('color:#888;', 'color:#000;'); // change color to black

    const sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(noBlabkBgBody);

    this.responseBody$.next(sanitizedHtml);

    this.running$.next(false);
  }
}
