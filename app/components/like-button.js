import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LikeButtonComponent extends Component {
  @tracked count = 0;

  @action
  like() {
    this.count = this.count + 1; // 再代入することで @tracked が変更を検知する
  }
}
