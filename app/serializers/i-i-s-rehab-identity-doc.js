import { Serializer as IdentityDocSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rehab-identity-doc';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(IdentityDocSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
