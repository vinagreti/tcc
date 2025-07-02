import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
  ActionType,
} from '@ngrx/store';

export const appActions = createActionGroup({
  source: 'App',
  events: {
    // defining an event without payload using the `emptyProps` function
    setTitleEmpty: emptyProps(),

    // defining an event with payload using the `props` function
    setTitleProps: props<{ payload: string }>(),

    // defining an event with payload using the props factory
    setTitleQuery: (query: string) => ({ query }),
  },
});

export const storageActionType = '@ngrx/store/storage';

export const storageAction = createAction(
  storageActionType,
  props<{ payload: string }>(),
);

export type PayloadAction = ActionType<any> & {
  payload: unknown;
};
