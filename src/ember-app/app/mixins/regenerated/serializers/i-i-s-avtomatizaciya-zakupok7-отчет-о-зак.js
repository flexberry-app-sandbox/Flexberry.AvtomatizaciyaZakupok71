import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      контрагенты: { serialize: 'odata-id', deserialize: 'records' },
      организации: { serialize: 'odata-id', deserialize: 'records' },
      склады: { serialize: 'odata-id', deserialize: 'records' },
      тчОтчет: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
