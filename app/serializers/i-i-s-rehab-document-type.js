import { Serializer as DocumentTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-rehab-document-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DocumentTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
