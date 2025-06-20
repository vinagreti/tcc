import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAppTitle } from './redux/app.selectos';
import { AsyncPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { storageAction } from './redux/app.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe, StoreModule, EffectsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title$: Observable<string>;

  constructor(
    private store: Store<{ count: number }>,
    private readonly renderer: Renderer2,
  ) {
    this.title$ = this.store.select(selectAppTitle);
  }

  ngOnInit() {
    this.renderer.listen('window', 'storage', (event) => {
      this.store.dispatch(storageAction({ payload: event.key as string }));
    });
  }
}
