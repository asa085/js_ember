import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

// ★ Glimmer Component(現行の標準的な書き方)
export default class ProductCardComponent extends Component {
  // @tracked = 「この値が変わったら画面を再描画して」という印
  // これを忘れると、値は変わるのに画面が更新されないバグになる(超頻出)
  @tracked isExpanded = false;

  // @action = テンプレートから呼ぶメソッドに付ける印(this を正しく束縛する)
  @action
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
