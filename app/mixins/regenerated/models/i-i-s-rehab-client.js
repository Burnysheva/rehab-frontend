import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  surname: DS.attr('string'),
  name: DS.attr('string'),
  patronymic: DS.attr('string'),
  sex: DS.attr('string'),
  birthday: DS.attr('string'),
  house: DS.belongsTo('i-i-s-rehab-house', { inverse: null, async: false }),
  addressreg: DS.belongsTo('i-i-s-rehab-house', { inverse: null, async: false }),
  identityDoc: DS.hasMany('i-i-s-rehab-identity-doc', { inverse: 'client', async: false })
});

export let ValidationRules = {
  surname: {
    descriptionKey: 'models.i-i-s-rehab-client.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-rehab-client.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  patronymic: {
    descriptionKey: 'models.i-i-s-rehab-client.validations.patronymic.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  sex: {
    descriptionKey: 'models.i-i-s-rehab-client.validations.sex.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  birthday: {
    descriptionKey: 'models.i-i-s-rehab-client.validations.birthday.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  house: {
    descriptionKey: 'models.i-i-s-rehab-client.validations.house.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  addressreg: {
    descriptionKey: 'models.i-i-s-rehab-client.validations.addressreg.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  identityDoc: {
    descriptionKey: 'models.i-i-s-rehab-client.validations.identityDoc.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('clientE', 'i-i-s-rehab-client', {
    surname: attr('Surname', { index: 0 }),
    name: attr('Name', { index: 1 }),
    patronymic: attr('Patronymic', { index: 2 }),
    sex: attr('Sex', { index: 3 }),
    birthday: attr('Birthday', { index: 4 }),
    house: belongsTo('i-i-s-rehab-house', 'House', {
      addressString: attr('Address string', { index: 6 })
    }, { index: 5 }),
    addressreg: belongsTo('i-i-s-rehab-house', 'Addressreg', {
      addressString: attr('Address string', { index: 8 })
    }, { index: 7 }),
    identityDoc: hasMany('i-i-s-rehab-identity-doc', 'Identity doc', {
      series: attr('Series', { index: 0 }),
      number: attr('Number', { index: 1 }),
      issueDate: attr('Issue date', { index: 2 }),
      issueOrg: attr('Issue org', { index: 3 }),
      doctype: belongsTo('i-i-s-rehab-document-type', 'Doctype', {
        name: attr('Name', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('clientL', 'i-i-s-rehab-client', {
    surname: attr('Surname', { index: 0 }),
    name: attr('Name', { index: 1 }),
    patronymic: attr('Patronymic', { index: 2 }),
    sex: attr('Sex', { index: 3 }),
    birthday: attr('Birthday', { index: 4 }),
    house: belongsTo('i-i-s-rehab-house', 'Address string', {
      addressString: attr('Address string', { index: 5 })
    }, { index: -1, hidden: true }),
    addressreg: belongsTo('i-i-s-rehab-house', 'Address string', {
      addressString: attr('Address string', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
