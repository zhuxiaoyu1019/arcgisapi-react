import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Layout, Scale, Width } from "../interfaces";
import { RadioAppearance } from "./interfaces";
export declare class CalciteRadioGroup {
  el: HTMLCalciteRadioGroupElement;
  /** specify the appearance style of the radio group, defaults to solid. */
  appearance: RadioAppearance;
  /** is the radio group disabled  */
  disabled?: boolean;
  /** specify the layout of the radio group, defaults to horizontal */
  layout: Layout;
  /**
   * The group's name. Gets submitted with the form.
   */
  name: string;
  protected handleNameChange(value: string): void;
  /** The scale of the radio group */
  scale: Scale;
  /**
   * The group's selected item.
   */
  selectedItem: HTMLCalciteRadioGroupItemElement;
  protected handleSelectedItemChange<T extends HTMLCalciteRadioGroupItemElement>(newItem: T, oldItem: T): void;
  /** specify the width of the group, defaults to auto */
  width: Extract<"auto" | "full", Width>;
  connectedCallback(): void;
  componentDidLoad(): void;
  render(): VNode;
  handleLabelFocus(e: Record<string, any>): void;
  protected handleClick(event: MouseEvent): void;
  protected handleSelected(event: Event): void;
  protected handleKeyDown(event: KeyboardEvent): void;
  /** Fired when the selected option changes, event detail is the new value */
  calciteRadioGroupChange: EventEmitter<string>;
  /** Focuses the selected item. If there is no selection, it focuses the first item. */
  setFocus(): Promise<void>;
  private hiddenInput;
  private hasLoaded;
  private getItems;
  private selectItem;
  private syncWithInputProxy;
}
