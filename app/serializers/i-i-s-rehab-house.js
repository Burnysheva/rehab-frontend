import { Serializer as HouseSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rehab-house';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(HouseSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
