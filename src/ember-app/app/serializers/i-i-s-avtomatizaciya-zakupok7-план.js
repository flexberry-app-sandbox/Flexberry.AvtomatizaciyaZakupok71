import { Serializer as ПланSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-zakupok7-план';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПланSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
