import { Serializer as ЗаказПостSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-zakupok7-заказ-пост';
import ОтчетОЗакSerializer from './i-i-s-avtomatizaciya-zakupok7-отчет-о-зак';

export default ОтчетОЗакSerializer.extend(ЗаказПостSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
