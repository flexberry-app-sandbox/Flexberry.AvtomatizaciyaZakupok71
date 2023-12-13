import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  сумма: DS.attr('number'),
  суммаНДС: DS.attr('number'),
  цена: DS.attr('number'),
  этоУслуга: DS.attr('boolean'),
  номенклатура: DS.belongsTo('i-i-s-avtomatizaciya-zakupok7-номенклатура', { inverse: null, async: false }),
  отчетОЗак: DS.belongsTo('i-i-s-avtomatizaciya-zakupok7-отчет-о-зак', { inverse: 'тчОтчет', async: false, polymorphic: true })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-тч-отчет.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-тч-отчет.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаНДС: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-тч-отчет.validations.суммаНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-тч-отчет.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этоУслуга: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-тч-отчет.validations.этоУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-тч-отчет.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отчетОЗак: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-тч-отчет.validations.отчетОЗак.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчОтчетE', 'i-i-s-avtomatizaciya-zakupok7-тч-отчет', {
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
  });
};
