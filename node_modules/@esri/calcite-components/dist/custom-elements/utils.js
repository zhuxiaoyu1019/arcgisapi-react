import { setAssetPath } from "./index";
export function commitAssetPath(path) {
    setAssetPath(path);
}
export function register(tagToConstructor) {
    Object.keys(tagToConstructor).forEach((tag) => {
        if (!customElements.get(tag)) {
            customElements.define(tag, tagToConstructor[tag]);
        }
    });
}
