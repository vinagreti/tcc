import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { appReducer } from './app.reducers';

export interface State {}

export const reducers: ActionReducerMap<State> = { appReducer };

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
