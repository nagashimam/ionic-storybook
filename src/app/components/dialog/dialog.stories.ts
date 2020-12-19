import { CommonModule } from "@angular/common";
import { Component, Input, NgModule } from "@angular/core";
import { IonicModule, ModalController } from "@ionic/angular";
import { moduleMetadata } from "@storybook/angular";
import { DialogComponent } from "./dialog.component";

//#region テストデータ
//#endregion

//#region モジュール定義
@Component({
  selector: "app-dialog-launcher",
  template: ` <button (click)="launch()">ダイアログ起動</button> `,
})
class DialogLauncherComponent {
  @Input() message: string;
  constructor(private modalController: ModalController) {}

  public async launch() {
    const modal = await this.modalController.create({
      component: DialogComponent,
      cssClass: "custom-modal",
      componentProps: { message: this.message },
    });
    await modal.present();
  }
}
const DECLARATIONS = [DialogComponent, DialogLauncherComponent];
@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  entryComponents: [DialogComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  providers: [ModalController],
})
class DialogLauncherComponentModule {}

const imports = [DialogLauncherComponentModule];

export const data = {
  imports,
};

export default {
  title: "DialogComponent",
  excludeStories: /.*[(data)]$/,
  decorators: [moduleMetadata(data)],
  component: DialogLauncherComponent,
};
//#endregion

const Template = (args: DialogLauncherComponent) => ({
  component: DialogLauncherComponent,
  props: args,
});

export const ダイアログ = Template.bind({});
ダイアログ.args = {
  message: "ダイアログです",
};
