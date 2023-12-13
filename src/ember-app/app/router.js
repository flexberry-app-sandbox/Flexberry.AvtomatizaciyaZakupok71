import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avtomatizaciya-zakupok7-единицы-измер-l');
  this.route('i-i-s-avtomatizaciya-zakupok7-единицы-измер-e',
  { path: 'i-i-s-avtomatizaciya-zakupok7-единицы-измер-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok7-единицы-измер-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok7-единицы-измер-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok7-заказ-пост-l');
  this.route('i-i-s-avtomatizaciya-zakupok7-заказ-пост-e',
  { path: 'i-i-s-avtomatizaciya-zakupok7-заказ-пост-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok7-заказ-пост-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok7-заказ-пост-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok7-контрагенты-l');
  this.route('i-i-s-avtomatizaciya-zakupok7-контрагенты-e',
  { path: 'i-i-s-avtomatizaciya-zakupok7-контрагенты-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok7-контрагенты-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok7-контрагенты-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok7-номенклатура-l');
  this.route('i-i-s-avtomatizaciya-zakupok7-номенклатура-e',
  { path: 'i-i-s-avtomatizaciya-zakupok7-номенклатура-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok7-номенклатура-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok7-номенклатура-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok7-организации-l');
  this.route('i-i-s-avtomatizaciya-zakupok7-организации-e',
  { path: 'i-i-s-avtomatizaciya-zakupok7-организации-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok7-организации-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok7-организации-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-l');
  this.route('i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-e',
  { path: 'i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok7-отчет-о-зак-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok7-план-закупок-l');
  this.route('i-i-s-avtomatizaciya-zakupok7-план-закупок-e',
  { path: 'i-i-s-avtomatizaciya-zakupok7-план-закупок-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok7-план-закупок-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok7-план-закупок-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupok7-склады-l');
  this.route('i-i-s-avtomatizaciya-zakupok7-склады-e',
  { path: 'i-i-s-avtomatizaciya-zakupok7-склады-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupok7-склады-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupok7-склады-e/new' });
});

export default Router;
