import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  relevance: DS.attr('boolean'),
  code: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-rehab-document-type.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  relevance: {
    descriptionKey: 'models.i-i-s-rehab-document-type.validations.relevance.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  code: {
    descriptionKey: 'models.i-i-s-rehab-document-type.validations.code.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DocumentTypeE', 'i-i-s-rehab-document-type', {
    name: attr('Name', { index: 0 }),
    relevance: attr('Relevance', { index: 1 }),
    code: attr('Code', { index: 2 })
  });

  modelClass.defineProjection('DocumentTypeL', 'i-i-s-rehab-document-type', {
    name: attr('Name', { index: 0 }),
    relevance: attr('Relevance', { index: 1 }),
    code: attr('Code', { index: 2 })
  });
};
