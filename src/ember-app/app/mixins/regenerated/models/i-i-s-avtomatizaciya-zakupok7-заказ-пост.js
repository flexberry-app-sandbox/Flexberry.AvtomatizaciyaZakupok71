import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончания: DS.attr('date'),
  номер: DS.attr('number'),
  состОтгрузки: DS.attr('i-i-s-avtomatizaciya-zakupok7-сост-поставок'),
  состояниеОплаты: DS.attr('i-i-s-avtomatizaciya-zakupok7-сост-оплаты'),
  суммаВклНДС: DS.attr('boolean'),
  суммаДокумента: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-avtomatizaciya-zakupok7-контрагенты', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-avtomatizaciya-zakupok7-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-avtomatizaciya-zakupok7-склады', { inverse: null, async: false }),
  заказ: DS.hasMany('i-i-s-avtomatizaciya-zakupok7-т-ч-заказ', { inverse: 'заказПост', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-заказ-пост.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-заказ-пост.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-заказ-пост.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состОтгрузки: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-заказ-пост.validations.состОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеОплаты: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-заказ-пост.validations.состояниеОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаВклНДС: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-заказ-пост.validations.суммаВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаДокумента: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-заказ-пост.validations.суммаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-заказ-пост.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-заказ-пост.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-заказ-пост.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-заказ-пост.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-avtomatizaciya-zakupok7-отчет-о-зак'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказПостE', 'i-i-s-avtomatizaciya-zakupok7-заказ-пост', {
    состояниеОплаты: attr('Состояние оплаты', { index: 0 }),
    состОтгрузки: attr('Сост отгрузки', { index: 1 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 2 }),
    суммаДокумента: attr('Сумма документа', { index: 3 }),
    датаНачала: attr('Дата начала', { index: 4 }),
    датаОкончания: attr('Дата окончания', { index: 5 }),
    номер: attr('Номер', { index: 6 }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupok7-организации', 'Организации', {
      организация: attr('Организация', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupok7-склады', 'Склады', {
      склад: attr('Склад', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'склад' }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupok7-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'контрагент' }),
    заказ: hasMany('i-i-s-avtomatizaciya-zakupok7-т-ч-заказ', 'Заказ', {
      цена: attr('Цена', { index: 0 }),
      этоУслуга: attr('Это услуга', { index: 1 }),
      суммаНДС: attr('Сумма НДС', { index: 2 }),
      количество: attr('Количество', { index: 3 }),
      сумма: attr('Сумма', { index: 4 }),
      номенклатура: belongsTo('i-i-s-avtomatizaciya-zakupok7-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 6, hidden: true }),
        единицыИзмер: belongsTo('i-i-s-avtomatizaciya-zakupok7-единицы-измер', '', {
          единицаИзмер: attr('ЕдиницаИзмер', { index: 7 })
        }, { index: -1, hidden: true })
      }, { index: 5, displayMemberPath: 'номенклатура' })
    }),
    тчОтчет: hasMany('i-i-s-avtomatizaciya-zakupok7-тч-отчет', 'Тч отчет', {
      цена: attr('Цена', { index: 0 }),
      этоУслуга: attr('Это услуга', { index: 1 }),
      суммаНДС: attr('Сумма НДС', { index: 2 }),
      количество: attr('Количество', { index: 3 }),
      сумма: attr('Сумма', { index: 4 }),
      номенклатура: belongsTo('i-i-s-avtomatizaciya-zakupok7-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 6, hidden: true }),
        контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupok7-контрагенты', '', {
          контрагент: attr('Контрагент', { index: 7 })
        }, { index: -1, hidden: true })
      }, { index: 5, displayMemberPath: 'номенклатура' })
    })
  });

  modelClass.defineProjection('ЗаказПостL', 'i-i-s-avtomatizaciya-zakupok7-заказ-пост', {
    состояниеОплаты: attr('Состояние оплаты', { index: 0 }),
    состОтгрузки: attr('Сост отгрузки', { index: 1 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 2 }),
    суммаДокумента: attr('Сумма документа', { index: 3 }),
    датаНачала: attr('Дата начала', { index: 4 }),
    датаОкончания: attr('Дата окончания', { index: 5 }),
    номер: attr('Номер', { index: 6 }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupok7-организации', 'Организация', {
      организация: attr('Организация', { index: 7 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupok7-склады', 'Склад', {
      склад: attr('Склад', { index: 8 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupok7-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
