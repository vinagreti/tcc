import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppActions } from './app.actions';
import { Observable } from 'rxjs';
import { selectAppTitle } from './app.selectos';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, EffectsModule, AsyncPipe],
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
      AppActions.setTitleProps({ payload: 'teste bruno query' }),
    );
  }
}
