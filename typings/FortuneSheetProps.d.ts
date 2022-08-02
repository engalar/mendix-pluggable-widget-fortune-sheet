/**
 * This file was generated from FortuneSheet.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface ColumnsType {
    columnDisplayName: DynamicValue<string>;
    columnValue?: ListAttributeValue<string | any | boolean | Date | Big>;
}

export interface ColumnsPreviewType {
    columnDisplayName: string;
    columnValue: string;
}

export interface FortuneSheetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    allowEdit: boolean;
    datasource: ListValue;
    columns: ColumnsType[];
}

export interface FortuneSheetPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    allowEdit: boolean;
    datasource: {} | { type: string } | null;
    columns: ColumnsPreviewType[];
}
