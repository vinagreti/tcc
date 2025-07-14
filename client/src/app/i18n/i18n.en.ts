import { AppTranslationKeysMap } from '@/i18n/i18n-translation-keys';
import { I18nLocale } from '@/services/i18n';
import { chai } from './../../../../models/chai/chai.assertion.i18n.en';

// Using AppTranslationKeysMap as TYPE is the JUMP OF THE CAT
export const enUs: AppTranslationKeysMap = {
  app: {
    title: 'We test',
    subtitle1: 'You innovate,',
    subtitle2: 'We test!',
    welcome: (name) => `Welcome ${name}`,
    locale: {
      short: {
        [I18nLocale.en]: 'En',
        [I18nLocale.pt]: 'Pt',
      },
      label: {
        [I18nLocale.en]: 'English',
        [I18nLocale.pt]: 'Português',
      },
    },
    actions: {
      open: 'Open',
      close: 'Close',
      create: 'Create',
      exclude: 'Exclude',
      run: 'Run',
    },
    labels: {
      test: 'Test',
      result: 'Result',
      error: 'Error',
      success: 'Success',
      status: 'Status',
      runningTest: 'Running test',
      preview: 'Preview',
      testResult: 'Test result',
      ipsun:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  },
  pages: {
    home: {
      title: 'Home',
      description: 'app description',
      features: {
        1: 'E2e test for web applications',
        2: 'Scheduled testing',
        3: 'CI integration',
        4: 'Test in different browsers',
        5: 'Alert notifications',
        6: 'No infrastructure needed',
        7: 'Support for organizations and personal usage',
        8: 'Execute tests from anywhere',
      },
      cta: 'Try for 7 days for free',
      noCard: 'No card needed!!',
      what: 'What is a TaaS',
      why: 'Why a TaaS',
      feedback: 'What people are saying about WeTest',
    },
    privateKeys: {
      title: 'Private Keys',
      description: 'Private keys description',
    },
    runTest: {
      title: 'Run test',
      description: 'Private keys description',
      viewScreenshots: 'Viewscreenshots',
      clickRunToExecuteTest: 'Click "Run" to see the results here',
    },
    tests: {
      title: 'My tests',
      description: 'Private keys description',
      createNewTest: 'Create new test',
    },
    account: {
      title: 'My account',
      description: 'My account data',
    },
    org: {
      title: 'My organizations',
      description: 'My organizations data',
    },
  },
  models: {
    chai,
  },
};

export default enUs;
