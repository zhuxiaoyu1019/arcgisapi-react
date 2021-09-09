import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Position } from "../interfaces";
/**
 * @slot - A slot for adding `calcite-action`s that will appear at the top of the action bar.
 * @slot bottom-actions - A slot for adding `calcite-action`s that will appear at the bottom of the action bar, above the collapse/expand button.
 * @slot expand-tooltip - Used to set the tooltip for the expand toggle.
 */
export declare class CalciteActionBar {
  /**
   * When set to true, the expand-toggling behavior will be disabled.
   */
  expandDisabled: boolean;
  expandHandler(expandDisabled: boolean): void;
  /**
   * Indicates whether widget is expanded.
   */
  expanded: boolean;
  expandedHandler(expanded: boolean): void;
  /**
   * Updates the label of the expand icon when the component is not expanded.
   */
  intlExpand?: string;
  /**
   * Updates the label of the collapse icon when the component is expanded.
   */
  intlCollapse?: string;
  /**
   * Disables automatically overflowing actions that won't fit into menus.
   */
  overflowActionsDisabled?: boolean;
  overflowDisabledHandler(overflowActionsDisabled: boolean): void;
  /**
   * Arranges the component depending on the elements 'dir' property.
   */
  position: Position;
  /**
   * Emitted when expanded has been toggled.
   */
  calciteActionBarToggle: EventEmitter;
  el: HTMLCalciteActionBarElement;
  mutationObserver: MutationObserver;
  resizeObserver: ResizeObserver;
  expandToggleEl: HTMLCalciteActionElement;
  lastActionCount: number;
  lastGroupCount: number;
  lastResizeHeight: number;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  setFocus(focusId?: "expand-toggle"): Promise<void>;
  actionMenuOpenChangeHandler: (event: CustomEvent<boolean>) => void;
  resizeHandlerEntries: (entries: ResizeObserverEntry[]) => void;
  resizeHandler: (entry: ResizeObserverEntry) => void;
  resize: (height: number) => void;
  toggleExpand: () => void;
  setExpandToggleRef: (el: HTMLCalciteActionElement) => void;
  renderBottomActionGroup(): VNode;
  render(): VNode;
}
