import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAvtomatizaciya_zakupok7ЕдиницыИзмерLForm from './forms/i-i-s-avtomatizaciya-zakupok7-единицы-измер-l';
import IISAvtomatizaciya_zakupok7ЗаказПостLForm from './forms/i-i-s-avtomatizaciya-zakupok7-заказ-пост-l';
import IISAvtomatizaciya_zakupok7КонтрагентыLForm from './forms/i-i-s-avtomatizaciya-zakupok7-контрагенты-l';
import IISAvtomatizaciya_zakupok7НоменклатураLForm from './forms/i-i-s-avtomatizaciya-zakupok7-номенклатура-l';
import IISAvtomatizaciya_zakupok7ОрганизацииLForm from './forms/i-i-s-avtomatizaciya-zakupok7-организации-l';
import IISAvtomatizaciya_zakupok7ОтчетОЗакLForm from './forms/i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-l';
import IISAvtomatizaciya_zakupok7ПланЗакупокLForm from './forms/i-i-s-avtomatizaciya-zakupok7-план-закупок-l';
import IISAvtomatizaciya_zakupok7СкладыLForm from './forms/i-i-s-avtomatizaciya-zakupok7-склады-l';
import IISAvtomatizaciya_zakupok7ЕдиницыИзмерEForm from './forms/i-i-s-avtomatizaciya-zakupok7-единицы-измер-e';
import IISAvtomatizaciya_zakupok7ЗаказПостEForm from './forms/i-i-s-avtomatizaciya-zakupok7-заказ-пост-e';
import IISAvtomatizaciya_zakupok7КонтрагентыEForm from './forms/i-i-s-avtomatizaciya-zakupok7-контрагенты-e';
import IISAvtomatizaciya_zakupok7НоменклатураEForm from './forms/i-i-s-avtomatizaciya-zakupok7-номенклатура-e';
import IISAvtomatizaciya_zakupok7ОрганизацииEForm from './forms/i-i-s-avtomatizaciya-zakupok7-организации-e';
import IISAvtomatizaciya_zakupok7ОтчетОЗакEForm from './forms/i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-e';
import IISAvtomatizaciya_zakupok7ПланЗакупокEForm from './forms/i-i-s-avtomatizaciya-zakupok7-план-закупок-e';
import IISAvtomatizaciya_zakupok7СкладыEForm from './forms/i-i-s-avtomatizaciya-zakupok7-склады-e';
import IISAvtomatizaciya_zakupok7ЕдиницыИзмерModel from './models/i-i-s-avtomatizaciya-zakupok7-единицы-измер';
import IISAvtomatizaciya_zakupok7ЗаказПостModel from './models/i-i-s-avtomatizaciya-zakupok7-заказ-пост';
import IISAvtomatizaciya_zakupok7КонтрагентыModel from './models/i-i-s-avtomatizaciya-zakupok7-контрагенты';
import IISAvtomatizaciya_zakupok7НоменклатураModel from './models/i-i-s-avtomatizaciya-zakupok7-номенклатура';
import IISAvtomatizaciya_zakupok7ОрганизацииModel from './models/i-i-s-avtomatizaciya-zakupok7-организации';
import IISAvtomatizaciya_zakupok7ОтчетОЗакModel from './models/i-i-s-avtomatizaciya-zakupok7-отчет-о-зак';
import IISAvtomatizaciya_zakupok7ПланЗакупокModel from './models/i-i-s-avtomatizaciya-zakupok7-план-закупок';
import IISAvtomatizaciya_zakupok7ПланModel from './models/i-i-s-avtomatizaciya-zakupok7-план';
import IISAvtomatizaciya_zakupok7СкладыModel from './models/i-i-s-avtomatizaciya-zakupok7-склады';
import IISAvtomatizaciya_zakupok7ТЧЗаказModel from './models/i-i-s-avtomatizaciya-zakupok7-т-ч-заказ';
import IISAvtomatizaciya_zakupok7ТчОтчетModel from './models/i-i-s-avtomatizaciya-zakupok7-тч-отчет';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avtomatizaciya-zakupok7-единицы-измер': IISAvtomatizaciya_zakupok7ЕдиницыИзмерModel,
    'i-i-s-avtomatizaciya-zakupok7-заказ-пост': IISAvtomatizaciya_zakupok7ЗаказПостModel,
    'i-i-s-avtomatizaciya-zakupok7-контрагенты': IISAvtomatizaciya_zakupok7КонтрагентыModel,
    'i-i-s-avtomatizaciya-zakupok7-номенклатура': IISAvtomatizaciya_zakupok7НоменклатураModel,
    'i-i-s-avtomatizaciya-zakupok7-организации': IISAvtomatizaciya_zakupok7ОрганизацииModel,
    'i-i-s-avtomatizaciya-zakupok7-отчет-о-зак': IISAvtomatizaciya_zakupok7ОтчетОЗакModel,
    'i-i-s-avtomatizaciya-zakupok7-план-закупок': IISAvtomatizaciya_zakupok7ПланЗакупокModel,
    'i-i-s-avtomatizaciya-zakupok7-план': IISAvtomatizaciya_zakupok7ПланModel,
    'i-i-s-avtomatizaciya-zakupok7-склады': IISAvtomatizaciya_zakupok7СкладыModel,
    'i-i-s-avtomatizaciya-zakupok7-т-ч-заказ': IISAvtomatizaciya_zakupok7ТЧЗаказModel,
    'i-i-s-avtomatizaciya-zakupok7-тч-отчет': IISAvtomatizaciya_zakupok7ТчОтчетModel
  },

  'application-name': 'Avtomatizaciya_zakupok7',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Avtomatizaciya_zakupok7',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_zakupok7',
          title: 'Avtomatizaciya_zakupok7'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'avtomatizaciya-zakupok7': {
          caption: 'Avtomatizaciya_zakupok7',
          title: 'Avtomatizaciya_zakupok7',
          'i-i-s-avtomatizaciya-zakupok7-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-avtomatizaciya-zakupok7-заказ-пост-l': {
            caption: 'Заказ пост',
            title: ''
          },
          'i-i-s-avtomatizaciya-zakupok7-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-avtomatizaciya-zakupok7-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-avtomatizaciya-zakupok7-план-закупок-l': {
            caption: 'План закупок',
            title: ''
          },
          'i-i-s-avtomatizaciya-zakupok7-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-l': {
            caption: 'Отчет о зак',
            title: ''
          },
          'i-i-s-avtomatizaciya-zakupok7-единицы-измер-l': {
            caption: 'Единицы измер',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-avtomatizaciya-zakupok7-единицы-измер-l': IISAvtomatizaciya_zakupok7ЕдиницыИзмерLForm,
    'i-i-s-avtomatizaciya-zakupok7-заказ-пост-l': IISAvtomatizaciya_zakupok7ЗаказПостLForm,
    'i-i-s-avtomatizaciya-zakupok7-контрагенты-l': IISAvtomatizaciya_zakupok7КонтрагентыLForm,
    'i-i-s-avtomatizaciya-zakupok7-номенклатура-l': IISAvtomatizaciya_zakupok7НоменклатураLForm,
    'i-i-s-avtomatizaciya-zakupok7-организации-l': IISAvtomatizaciya_zakupok7ОрганизацииLForm,
    'i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-l': IISAvtomatizaciya_zakupok7ОтчетОЗакLForm,
    'i-i-s-avtomatizaciya-zakupok7-план-закупок-l': IISAvtomatizaciya_zakupok7ПланЗакупокLForm,
    'i-i-s-avtomatizaciya-zakupok7-склады-l': IISAvtomatizaciya_zakupok7СкладыLForm,
    'i-i-s-avtomatizaciya-zakupok7-единицы-измер-e': IISAvtomatizaciya_zakupok7ЕдиницыИзмерEForm,
    'i-i-s-avtomatizaciya-zakupok7-заказ-пост-e': IISAvtomatizaciya_zakupok7ЗаказПостEForm,
    'i-i-s-avtomatizaciya-zakupok7-контрагенты-e': IISAvtomatizaciya_zakupok7КонтрагентыEForm,
    'i-i-s-avtomatizaciya-zakupok7-номенклатура-e': IISAvtomatizaciya_zakupok7НоменклатураEForm,
    'i-i-s-avtomatizaciya-zakupok7-организации-e': IISAvtomatizaciya_zakupok7ОрганизацииEForm,
    'i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-e': IISAvtomatizaciya_zakupok7ОтчетОЗакEForm,
    'i-i-s-avtomatizaciya-zakupok7-план-закупок-e': IISAvtomatizaciya_zakupok7ПланЗакупокEForm,
    'i-i-s-avtomatizaciya-zakupok7-склады-e': IISAvtomatizaciya_zakupok7СкладыEForm
  },

});

export default translations;
