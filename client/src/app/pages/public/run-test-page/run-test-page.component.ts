import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-run-test-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './run-test-page.component.html',
  styleUrl: './run-test-page.component.scss',
})
export class RunTestPageComponent {
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

    const request = await fetch('http://localhost:3000/parse', {
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
