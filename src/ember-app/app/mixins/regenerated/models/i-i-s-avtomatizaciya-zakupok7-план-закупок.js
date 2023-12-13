import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-avtomatizaciya-zakupok7-контрагенты', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-avtomatizaciya-zakupok7-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-avtomatizaciya-zakupok7-склады', { inverse: null, async: false }),
  план: DS.hasMany('i-i-s-avtomatizaciya-zakupok7-план', { inverse: 'планЗакупок', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-план-закупок.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-план-закупок.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-план-закупок.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-план-закупок.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-план-закупок.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  план: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-план-закупок.validations.план.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланЗакупокE', 'i-i-s-avtomatizaciya-zakupok7-план-закупок', {
    датаНачала: attr('Дата начала', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupok7-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'контрагент' }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupok7-склады', 'Склады', {
      склад: attr('Склад', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'склад' }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupok7-организации', 'Организации', {
      организация: attr('Организация', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'организация' }),
    план: hasMany('i-i-s-avtomatizaciya-zakupok7-план', 'План', {
      этоУслуга: attr('Это услуга', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      номенклатура: belongsTo('i-i-s-avtomatizaciya-zakupok7-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 3, hidden: true }),
        единицыИзмер: belongsTo('i-i-s-avtomatizaciya-zakupok7-единицы-измер', '', {
          единицаИзмер: attr('ЕдиницаИзмер', { index: 4 })
        }, { index: -1, hidden: true }),
        контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupok7-контрагенты', '', {
          контрагент: attr('Контрагент', { index: 5 })
        }, { index: -1, hidden: true })
      }, { index: 2, displayMemberPath: 'номенклатура' })
    })
  });

  modelClass.defineProjection('ПланЗакупокL', 'i-i-s-avtomatizaciya-zakupok7-план-закупок', {
    датаНачала: attr('Дата начала', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupok7-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 2 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupok7-склады', 'Склад', {
      склад: attr('Склад', { index: 3 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupok7-организации', 'Организация', {
      организация: attr('Организация', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
