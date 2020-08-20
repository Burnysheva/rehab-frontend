import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-rehab-identity-doc', 'Unit | Model | i-i-s-rehab-identity-doc', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-rehab-client',
    'model:i-i-s-rehab-document-type',
    'model:i-i-s-rehab-house',
    'model:i-i-s-rehab-identity-doc',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
