import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
export declare class CalciteSwitch {
  el: HTMLCalciteSwitchElement;
  /** True if the switch is disabled */
  disabled?: boolean;
  disabledWatcher(newDisabled: boolean): void;
  /** The name of the switch input */
  name?: string;
  nameChanged(newName: string): void;
  /** The scale of the switch */
  scale: Scale;
  /** True if the switch is initially on */
  switched: boolean;
  switchedWatcher(newSwitched: boolean): void;
  /** The value of the switch input */
  value?: any;
  private inputEl;
  guid: string;
  tabindex: number;
  setFocus(): Promise<void>;
  private setupInput;
  private toggle;
  /**
   * Fires when the switched value has changed.
   */
  calciteSwitchChange: EventEmitter;
  handleLabelFocus(e: CustomEvent): void;
  onClick(e: MouseEvent): void;
  keyDownHandler(e: KeyboardEvent): void;
  componentWillLoad(): void;
  render(): VNode;
}
