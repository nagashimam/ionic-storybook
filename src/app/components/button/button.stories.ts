import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { moduleMetadata } from "@storybook/angular";
import { ButtonComponent } from "src/app/components/button/button.component";

//#region テストデータ
//#endregion

//#region モジュール定義
const imports = [CommonModule, IonicModule.forRoot()];
const declarations = [ButtonComponent];

export const data = {
  imports,
  declarations,
};

export default {
  title: "ButtonComponent",
  excludeStories: /.*[data]$/,
  decorators: [moduleMetadata(data)],
  component: ButtonComponent,
};
//#endregion
const baseCss = `' md button button-solid ion-activatable ion-focusable hydrated'`;
const Template = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template: `
    <ion-app>
      <ion-content>
        <app-button
          [size]="size + ${baseCss}"
        ></app-button>
      </ion-content>
    </ion-app>
  `,
});

export const ボタン_大 = Template.bind({});
ボタン_大.args = {
  size: "large",
};
export const ボタン_中 = Template.bind({});
ボタン_中.args = {
  size: "medium",
};
export const ボタン_小 = Template.bind({});
ボタン_小.args = {
  size: "small",
};
