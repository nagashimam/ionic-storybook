import { Component, Input } from "@angular/core";

/**
 * カスタムボタン
 *
 * @export
 * @class ButtonComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  /**
   * ボタンの大きさ
   *
   * 現状実装されているのは"large" | "medium" | "small"の3種類
   *
   * large= 16rem * 8rem, medium= 8rem * 4rem, small= 4rem * 2rem
   *
   * @type {("large" | "medium" | "small")}
   * @memberof ButtonComponent
   */
  @Input() size: "large" | "medium" | "small";
  constructor() {}
}
