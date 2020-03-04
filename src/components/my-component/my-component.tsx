import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { modalController } from '@ionic/core';
import '@ionic/core';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private  open = async () => {
    const modal = await modalController.create({component: 'my-modal'});
    await modal.present();
  }

  render() {
    return <ion-button onClick={this.open}>Open modal</ion-button>;
  }
}
