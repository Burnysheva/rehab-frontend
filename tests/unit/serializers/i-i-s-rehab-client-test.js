import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-rehab-client', 'Unit | Serializer | i-i-s-rehab-client', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-rehab-client',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
