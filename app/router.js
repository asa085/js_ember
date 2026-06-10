import EmberRouter from '@ember/routing/router';
import config from 'ember-study-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

// ★ URL の設計図。ここを見れば「このアプリにどんな画面があるか」が分かる
Router.map(function () {
  // /products … 商品一覧
  this.route('products', function () {
    // /products/:product_id … 商品詳細(:product_id は動的な値)
    this.route('detail', { path: '/:product_id' });
  });
  // /about … 静的ページの例(route ファイルすら不要)
  this.route('about');
});
