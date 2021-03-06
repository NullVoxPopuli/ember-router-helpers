import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('url-for', 'helper:url-for', {
  integration: true,

  beforeEach() {
    Ember.getOwner(this).lookup('router:main').setupRouter();
  }
});

test('it can generate simple urls', function(assert) {
  this.render(hbs`{{url-for 'parent.child'}}`);

  assert.equal(this._element.textContent, '/child');
});

test('it can generate urls with query params', function(assert) {
  this.render(hbs`{{url-for 'parent.child' (query-params foo="bar")}}`);

  assert.equal(this._element.textContent, '/child?foo=bar');
});
