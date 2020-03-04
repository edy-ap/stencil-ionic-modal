import { Component, Host, h } from "@stencil/core";
import '@ionic/core';

@Component({
  tag: "my-modal",
  styleUrl: "modal.css",
  scoped: false
})
export class Modal {
  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar>
            <ion-title slot="start">Modal</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>
              <ion-label>Gender</ion-label>
              <ion-select placeholder="Select One">
                <ion-select-option value="f">Female</ion-select-option>
                <ion-select-option value="m">Male</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>
        </ion-content>
        <ion-footer>Footer</ion-footer>
      </Host>
    );
  }
}
