import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.caption'),
          title: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.title'),
          children: [{
            link: 'i-i-s-avtomatizaciya-zakupok7-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-номенклатура-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-zakupok7-заказ-пост-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-заказ-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-заказ-пост-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-zakupok7-склады-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-склады-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-zakupok7-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-контрагенты-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-zakupok7-план-закупок-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-план-закупок-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-план-закупок-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-zakupok7-организации-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-организации-l.title'),
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-avtomatizaciya-zakupok7-единицы-измер-l',
            caption: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-единицы-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.avtomatizaciya-zakupok7.i-i-s-avtomatizaciya-zakupok7-единицы-измер-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})