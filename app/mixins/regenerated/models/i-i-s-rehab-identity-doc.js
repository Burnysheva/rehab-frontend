import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  series: DS.attr('string'),
  number: DS.attr('string'),
  issueDate: DS.attr('string'),
  issueOrg: DS.attr('string'),
  doctype: DS.belongsTo('i-i-s-rehab-document-type', { inverse: null, async: false }),
  client: DS.belongsTo('i-i-s-rehab-client', { inverse: 'identityDoc', async: false })
});

export let ValidationRules = {
  series: {
    descriptionKey: 'models.i-i-s-rehab-identity-doc.validations.series.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  number: {
    descriptionKey: 'models.i-i-s-rehab-identity-doc.validations.number.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  issueDate: {
    descriptionKey: 'models.i-i-s-rehab-identity-doc.validations.issueDate.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  issueOrg: {
    descriptionKey: 'models.i-i-s-rehab-identity-doc.validations.issueOrg.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  doctype: {
    descriptionKey: 'models.i-i-s-rehab-identity-doc.validations.doctype.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  client: {
    descriptionKey: 'models.i-i-s-rehab-identity-doc.validations.client.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('IdentityDocE', 'i-i-s-rehab-identity-doc', {
    series: attr('Series', { index: 0 }),
    number: attr('Number', { index: 1 }),
    issueDate: attr('Issue date', { index: 2 }),
    issueOrg: attr('Issue org', { index: 3 }),
    doctype: belongsTo('i-i-s-rehab-document-type', 'Doctype', {
      name: attr('Name', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'name' })
  });
};
