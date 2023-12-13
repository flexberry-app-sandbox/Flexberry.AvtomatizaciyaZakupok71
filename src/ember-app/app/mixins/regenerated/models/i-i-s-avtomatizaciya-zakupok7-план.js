import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  этоУслуга: DS.attr('boolean'),
  номенклатура: DS.belongsTo('i-i-s-avtomatizaciya-zakupok7-номенклатура', { inverse: null, async: false }),
  планЗакупок: DS.belongsTo('i-i-s-avtomatizaciya-zakupok7-план-закупок', { inverse: 'план', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-план.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этоУслуга: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-план.validations.этоУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-план.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планЗакупок: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok7-план.validations.планЗакупок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланE', 'i-i-s-avtomatizaciya-zakupok7-план', {
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
  });
};
