import {
  defineNamespace,
  defineProjections,
  Model as ТчОтчетMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupok7-тч-отчет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчОтчетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
