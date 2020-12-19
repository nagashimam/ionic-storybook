import { Component, Input } from "@angular/core";

/**
 * カスタムダイアログ
 *
 * @export
 * @class DialogComponent
 */
@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent {
  /**
   * ダイアログ内で表示するメッセージ
   *
   * @type {string}
   * @memberof DialogComponent
   */
  @Input() message: string;
  constructor() {}
}
