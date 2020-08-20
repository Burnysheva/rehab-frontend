import { Serializer as clientSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rehab-client';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(clientSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
