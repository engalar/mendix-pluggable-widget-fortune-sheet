import { parseStyle } from "./piw-utils-internal";
import { FortuneSheetPreviewProps } from "../typings/FortuneSheetProps";

declare function require(name: string): string;

export function preview(props: FortuneSheetPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
