import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-rehab-client-l');
  this.route('i-i-s-rehab-client-e',
  { path: 'i-i-s-rehab-client-e/:id' });
  this.route('i-i-s-rehab-client-e.new',
  { path: 'i-i-s-rehab-client-e/new' });
  this.route('i-i-s-rehab-document-type-l');
  this.route('i-i-s-rehab-document-type-e',
  { path: 'i-i-s-rehab-document-type-e/:id' });
  this.route('i-i-s-rehab-document-type-e.new',
  { path: 'i-i-s-rehab-document-type-e/new' });
  this.route('i-i-s-rehab-house-l');
  this.route('i-i-s-rehab-house-e',
  { path: 'i-i-s-rehab-house-e/:id' });
  this.route('i-i-s-rehab-house-e.new',
  { path: 'i-i-s-rehab-house-e/new' });
});

export default Router;
