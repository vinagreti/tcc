import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { appActions } from './redux/app.actions';
import { Observable } from 'rxjs';
import { selectAppTitle } from './redux/app.selectos';
import { AsyncPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe, StoreModule, EffectsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title$: Observable<string>;

  constructor(private store: Store<{ count: number }>) {
    this.title$ = this.store.select(selectAppTitle);
  }

  changeTitle() {
    this.store.dispatch(
      appActions.setTitleProps({ payload: 'teste bruno query' }),
    );
  }
}
