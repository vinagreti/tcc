import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DbService } from '../../../services/db/db.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-tests-page',
  standalone: true,
  imports: [NgFor, AsyncPipe, RouterLink],
  templateUrl: './tests-page.component.html',
  styleUrl: './tests-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsPageComponent {
  dbService = inject(DbService);

  tests$ = this.dbService.testsMap$.pipe(
    map((testsMap) => Object.values(testsMap))
  );

  addNewTest() {
    this.dbService.addTest();
  }

  dropTest(id: string) {
    this.dbService.dropById(id);
  }
}
