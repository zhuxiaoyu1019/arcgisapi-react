import { VNode } from "../../stencil-public-runtime";
import { TileSelectGroupLayout } from "./interfaces";
export declare class CalciteTileSelectGroup {
  /** Tiles by default move horizontally, stacking with each row, vertical allows single-column layouts */
  layout?: TileSelectGroupLayout;
  render(): VNode;
}
