import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISRehabclientLForm from './forms/i-i-s-rehab-client-l';
import IISRehabDocumentTypeLForm from './forms/i-i-s-rehab-document-type-l';
import IISRehabHouseLForm from './forms/i-i-s-rehab-house-l';
import IISRehabclientEForm from './forms/i-i-s-rehab-client-e';
import IISRehabDocumentTypeEForm from './forms/i-i-s-rehab-document-type-e';
import IISRehabHouseEForm from './forms/i-i-s-rehab-house-e';
import IISRehabclientModel from './models/i-i-s-rehab-client';
import IISRehabDocumentTypeModel from './models/i-i-s-rehab-document-type';
import IISRehabHouseModel from './models/i-i-s-rehab-house';
import IISRehabIdentityDocModel from './models/i-i-s-rehab-identity-doc';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-rehab-client': IISRehabclientModel,
    'i-i-s-rehab-document-type': IISRehabDocumentTypeModel,
    'i-i-s-rehab-house': IISRehabHouseModel,
    'i-i-s-rehab-identity-doc': IISRehabIdentityDocModel
  },

  'application-name': 'Rehab',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Rehab',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Rehab',
          title: 'Rehab'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        rehab: {
          caption: 'Rehab',
          title: 'Rehab',
          'i-i-s-rehab-document-type-l': {
            caption: 'Document type',
            title: ''
          },
          'i-i-s-rehab-house-l': {
            caption: 'House',
            title: ''
          },
          'i-i-s-rehab-client-l': {
            caption: 'Client',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-rehab-client-l': IISRehabclientLForm,
    'i-i-s-rehab-document-type-l': IISRehabDocumentTypeLForm,
    'i-i-s-rehab-house-l': IISRehabHouseLForm,
    'i-i-s-rehab-client-e': IISRehabclientEForm,
    'i-i-s-rehab-document-type-e': IISRehabDocumentTypeEForm,
    'i-i-s-rehab-house-e': IISRehabHouseEForm
  },

});

export default translations;
