import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-zakupok7-единицы-измер', 'Unit | Model | i-i-s-avtomatizaciya-zakupok7-единицы-измер', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
