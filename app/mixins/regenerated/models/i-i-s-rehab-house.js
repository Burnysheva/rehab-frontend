import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  addressString: DS.attr('string'),
  city: DS.attr('string'),
  street: DS.attr('string'),
  number: DS.attr('string')
});

export let ValidationRules = {
  addressString: {
    descriptionKey: 'models.i-i-s-rehab-house.validations.addressString.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  city: {
    descriptionKey: 'models.i-i-s-rehab-house.validations.city.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  street: {
    descriptionKey: 'models.i-i-s-rehab-house.validations.street.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  number: {
    descriptionKey: 'models.i-i-s-rehab-house.validations.number.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('HouseE', 'i-i-s-rehab-house', {
    addressString: attr('Address string', { index: 0 }),
    city: attr('City', { index: 1 }),
    street: attr('Street', { index: 2 }),
    number: attr('Number', { index: 3 })
  });

  modelClass.defineProjection('HouseL', 'i-i-s-rehab-house', {
    addressString: attr('Address string', { index: 0 }),
    city: attr('City', { index: 1 }),
    street: attr('Street', { index: 2 }),
    number: attr('Number', { index: 3 })
  });
};
