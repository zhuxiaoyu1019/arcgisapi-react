import { Component, Element, Event, h, Host, Listen, Method, Prop, State, Watch } from "@stencil/core";
import { focusElement, getElementDir, hasLabel } from "../../utils/dom";
import { hiddenInputStyle } from "../../utils/form";
import { guid } from "../../utils/guid";
import { getKey } from "../../utils/key";
import { CSS_UTILITY } from "../../utils/resources";
export class CalciteSwitch {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** True if the switch is disabled */
    this.disabled = false;
    /** The scale of the switch */
    this.scale = "m";
    /** True if the switch is initially on */
    this.switched = false;
    //--------------------------------------------------------------------------
    //
    //  Private Properties
    //
    //--------------------------------------------------------------------------
    this.inputEl = document.createElement("input");
  }
  disabledWatcher(newDisabled) {
    this.inputEl.disabled = newDisabled;
    this.tabindex = newDisabled ? -1 : 0;
  }
  nameChanged(newName) {
    this.inputEl.name = newName;
  }
  switchedWatcher(newSwitched) {
    this.inputEl.checked = newSwitched;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async setFocus() {
    focusElement(this.inputEl);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  setupInput() {
    this.switched && this.inputEl.setAttribute("checked", "");
    this.inputEl.disabled = this.disabled;
    this.inputEl.id = `${this.guid}-input`;
    this.inputEl.name = this.name;
    this.inputEl.style.cssText = hiddenInputStyle;
    this.inputEl.type = "checkbox";
    if (this.value) {
      this.inputEl.value = this.value != null ? this.value.toString() : "";
    }
    this.el.appendChild(this.inputEl);
  }
  toggle() {
    this.switched = !this.switched;
    this.calciteSwitchChange.emit({
      switched: this.switched
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleLabelFocus(e) {
    if (!this.disabled &&
      !this.el.contains(e.detail.interactedEl) &&
      hasLabel(e.detail.labelEl, this.el)) {
      this.el.focus();
    }
    else {
      return;
    }
  }
  onClick(e) {
    // prevent duplicate click events that occur
    // when the component is wrapped in a label and checkbox is clicked
    if ((!this.disabled && this.el.closest("label") && e.target === this.inputEl) ||
      (!this.el.closest("label") && e.target === this.el)) {
      this.toggle();
    }
  }
  keyDownHandler(e) {
    const key = getKey(e.key);
    if (!this.disabled && (key === " " || key === "Enter")) {
      this.toggle();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.guid = this.el.id || `calcite-switch-${guid()}`;
    this.tabindex = this.el.getAttribute("tabindex") || this.disabled ? -1 : 0;
    this.setupInput();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = getElementDir(this.el);
    return (h(Host, { tabindex: this.tabindex },
      h("div", { "aria-checked": this.switched.toString(), class: { container: true, [CSS_UTILITY.rtl]: dir === "rtl" } },
        h("div", { class: "track" },
          h("div", { class: "handle" })))));
  }
  static get is() { return "calcite-switch"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-switch.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-switch.css"]
  }; }
  static get properties() { return {
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "True if the switch is disabled"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The name of the switch input"
      },
      "attribute": "name",
      "reflect": true
    },
    "scale": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Scale",
        "resolved": "\"l\" | \"m\" | \"s\"",
        "references": {
          "Scale": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The scale of the switch"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "switched": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "True if the switch is initially on"
      },
      "attribute": "switched",
      "reflect": true,
      "defaultValue": "false"
    },
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The value of the switch input"
      },
      "attribute": "value",
      "reflect": true
    }
  }; }
  static get states() { return {
    "guid": {},
    "tabindex": {}
  }; }
  static get events() { return [{
      "method": "calciteSwitchChange",
      "name": "calciteSwitchChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fires when the switched value has changed."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "disabled",
      "methodName": "disabledWatcher"
    }, {
      "propName": "name",
      "methodName": "nameChanged"
    }, {
      "propName": "switched",
      "methodName": "switchedWatcher"
    }]; }
  static get listeners() { return [{
      "name": "calciteLabelFocus",
      "method": "handleLabelFocus",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "click",
      "method": "onClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "keyDownHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
