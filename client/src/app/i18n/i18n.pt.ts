import { AppTranslationKeysMap } from '@/i18n/i18n-translation-keys';
import { I18nLocale } from '@/services/i18n';

// Using AppTranslationKeysMap as TYPE is the JUMP OF THE CAT
export const ptBr: AppTranslationKeysMap = {
  app: {
    title: 'We test',
    subtitle1: 'Você inova,',
    subtitle2: 'Nós testamos!',
    welcome: (name) => `Bem vindo ${name}`,
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
      open: 'Abrir',
      close: 'Fechar',
      create: 'Criar',
      exclude: 'Excluir',
      run: 'Executar',
    },
    labels: {
      test: 'Teste',
      result: 'Resultado',
      error: 'Erro',
      success: 'Sucesso',
      status: 'Status',
      runningTest: 'Executando teste',
      preview: 'Pré-visualização',
      testResult: 'Resultado do teste',
      ipsun:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  },
  pages: {
    home: {
      title: 'Home',
      description: 'descrição do app',
      features: {
        1: 'Teste e2e de aplicações WEB',
        2: 'Agendamento e testes recorrentes',
        3: 'Integração com pipelines de CI',
        4: 'Teste em diferentes browsers',
        5: 'Disparo de alertas',
        6: 'Não precisa de infraestrutura',
        7: 'Para organizações ou uso pessoal',
        8: 'Execute testes de onde quiser',
      },
      cta: 'Experimente grátis por 7 dias',
      noCard: 'Sem necessidade de cartão!!',
      what: 'O quê é um TaaS',
      why: 'Porquê usar TaaS',
      feedback: 'O que a pessoas estão falando da WeTest',
    },
    privateKeys: {
      title: 'Chaves privadas',
      description: 'Descrição chave privada',
    },
    runTest: {
      title: 'Execução de teste',
      description: 'Private keys description',
      viewScreenshots: 'Ver capturas de tela',
      clickRunToExecuteTest:
        'Clique "Executar" para ver os resultados do teste aqui',
    },
    tests: {
      title: 'Meus testes',
      description: 'Private keys description',
      createNewTest: 'Criar novo teste',
    },
    account: {
      title: 'Minha conta',
      description: 'Dados da minha conta',
    },
    org: {
      title: 'Minhas organizações',
      description: 'Dados da minhas organizações',
    },
  },
};

export default ptBr;
