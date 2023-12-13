import {
  defineNamespace,
  defineProjections,
  Model as ЕдиницыИзмерMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupok7-единицы-измер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЕдиницыИзмерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
