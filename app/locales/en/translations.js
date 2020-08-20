import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
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
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
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
        rehab: {
          caption: 'rehab',
          title: 'rehab',
          'i-i-s-rehab-document-type-l': {
            caption: 'i-i-s-rehab-document-type-l',
            title: 'i-i-s-rehab-document-type-l'
          },
          'i-i-s-rehab-house-l': {
            caption: 'i-i-s-rehab-house-l',
            title: 'i-i-s-rehab-house-l'
          },
          'i-i-s-rehab-client-l': {
            caption: 'i-i-s-rehab-client-l',
            title: 'i-i-s-rehab-client-l'
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
    'i-i-s-rehab-client-l': IISRehabclientLForm,
    'i-i-s-rehab-document-type-l': IISRehabDocumentTypeLForm,
    'i-i-s-rehab-house-l': IISRehabHouseLForm,
    'i-i-s-rehab-client-e': IISRehabclientEForm,
    'i-i-s-rehab-document-type-e': IISRehabDocumentTypeEForm,
    'i-i-s-rehab-house-e': IISRehabHouseEForm
  },

});

export default translations;
