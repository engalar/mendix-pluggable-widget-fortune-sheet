import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { FortuneSheetPreviewProps } from "../typings/FortuneSheetProps";

export function getProperties(
    values: FortuneSheetPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: FortuneSheetPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
