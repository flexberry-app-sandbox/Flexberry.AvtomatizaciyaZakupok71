import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТчОтчетMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupok7-тч-отчет';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТчОтчетMixin, Validations, {
});

defineProjections(Model);

export default Model;
