import { default as app } from '@/app.i18n';
import { default as pages } from '@/pages/pages.i18n';
import { default as models } from '@/models/models.i18n';

export const AppTranslationKeys = {
  app,
  pages,
  models,
};

export type AppTranslationKeysMap = typeof AppTranslationKeys;
