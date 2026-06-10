import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProductsDetailRoute extends Route {
  @service catalog;

  // ★ params には URL の動的部分が入る(/products/2 なら params.product_id === '2')
  model(params) {
    return this.catalog.find(params.product_id);
  }
}
