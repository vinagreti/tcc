import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-run-test-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './run-test-page.component.html',
  styleUrl: './run-test-page.component.scss',
})
export class RunTestPageComponent {
  private sanitized = inject(DomSanitizer);

  responseBody$ = new ReplaySubject();

  async runTest() {
    const testSet = {
      name: 'google test',
      description: 'test google home page',
      flows: [
        {
          itShould: 'have google title',
          steps: [
            {
              type: 'visit',
              value: 'https://example.cypress.io/',
            },
            {
              type: 'should',
              target: 'h1',
              should: 'have.text',
              value: 'Kitchen Sink',
            },
          ],
        },
        {
          itShould: 'have google title',
          steps: [
            {
              type: 'visit',
              value: 'https://example.cypress.io/',
            },
            {
              type: 'should',
              target: 'h1',
              should: 'have.text',
              value: 'Kitchen Sink',
            },
          ],
        },
      ],
    };

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

    this.responseBody$.next(responseBody);
  }
}
