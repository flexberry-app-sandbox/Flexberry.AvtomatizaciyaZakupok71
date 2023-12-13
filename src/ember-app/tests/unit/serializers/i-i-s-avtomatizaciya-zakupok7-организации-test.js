import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-zakupok7-организации', 'Unit | Serializer | i-i-s-avtomatizaciya-zakupok7-организации', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-avtomatizaciya-zakupok7-организации',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-avtomatizaciya-zakupok7-сост-оплаты',
    'transform:i-i-s-avtomatizaciya-zakupok7-сост-поставок',

    'model:i-i-s-avtomatizaciya-zakupok7-единицы-измер',
    'model:i-i-s-avtomatizaciya-zakupok7-заказ-пост',
    'model:i-i-s-avtomatizaciya-zakupok7-контрагенты',
    'model:i-i-s-avtomatizaciya-zakupok7-номенклатура',
    'model:i-i-s-avtomatizaciya-zakupok7-организации',
    'model:i-i-s-avtomatizaciya-zakupok7-отчет-о-зак',
    'model:i-i-s-avtomatizaciya-zakupok7-план-закупок',
    'model:i-i-s-avtomatizaciya-zakupok7-план',
    'model:i-i-s-avtomatizaciya-zakupok7-склады',
    'model:i-i-s-avtomatizaciya-zakupok7-т-ч-заказ',
    'model:i-i-s-avtomatizaciya-zakupok7-тч-отчет',
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
