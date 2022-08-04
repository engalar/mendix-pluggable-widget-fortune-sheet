import { FortuneSheetContainerProps } from "../typings/FortuneSheetProps";
import { Sheet, CellWithRowAndCol } from "@fortune-sheet/core";
import { ValueStatus } from "mendix";

import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "./ui/index.scss";

import classNames from "classnames";
import { useMemo, useRef, useEffect } from "react";
import { usePrevious } from "ahooks";


function cellValue(r: number, c: number, v: string): CellWithRowAndCol {
    return {
        r,
        c,
        v: {
            v,
            ct: {
                fa: "General",
                t: "g"
            },
            m: v,
            bg: undefined,
            bl: 1,
            it: 0,
            ff: 9,
            fs: 10,
            fc: "rgb(0, 0, 0)",
            ht: 1,
            vt: 0
        }
    };
}

function sheetValue(celldata: CellWithRowAndCol[]): Sheet {
    return {
        name: "Formula",
        id: "1",
        order: 1,
        column: 18,
        row: 45,
        celldata,
        luckysheet_selection_range: [],
        frozen: { type: "row" }
    };
}

const Loading: CellWithRowAndCol[] = [{
    r: 1,
    c: 0,
    v: {
        v: '加载中...',
        ct: {
            fa: "General",
            t: "g"
        },
        m: '加载中...',
        bg: undefined,
        bl: 1,
        it: 0,
        ff: 9,
        fs: 10,
        fc: "rgb(0, 0, 0)",
        ht: 1,
        vt: 0
    }
}];

function emptyValue(r: number, c: number): CellWithRowAndCol {
    return {
        r,
        c,
        v: {
            bg: undefined,
            bl: 0,
            it: 0,
            ff: 9,
            fs: 10,
            fc: "rgb(0, 0, 0)",
            ht: 1,
            vt: 0
        }
    }
}

export default function (props: FortuneSheetContainerProps) {
    const ref = useRef<WorkbookInstance>(null);
    const data: Sheet = useMemo(() => {
        const headValue = props.columns.map((c, i) => c.columnDisplayName.status === ValueStatus.Available ? cellValue(0, i, c.columnDisplayName.value!) : emptyValue(0, i));
        if (props.datasource.status === ValueStatus.Available) {
            let cellData: CellWithRowAndCol[] = [];
            (props.datasource.items ?? []).forEach((d, i) => {
                props.columns.forEach((column, i2) => {
                    const cv = cellValue(i + 1, i2, column.columnValue?.get(d).value);
                    cellData.push(cv);
                });
            });
            return sheetValue(cellData.concat(headValue));
        } else {
            return sheetValue(Loading.concat(headValue));
        }
    }, [props.datasource, props.columns]);

    const preData = usePrevious(data);

    useEffect(() => {
        preData?.celldata?.forEach(c => ref.current?.clearCell(c.r, c.c));
        data?.celldata?.forEach(c => ref.current?.setCellValue(c.r, c.c, c.v));
    }, [data, preData]);

    return (
        <div style={props.style} className={classNames('mendixcn-fortune-sheet', props.class)}>
            <Workbook ref={ref} showFormulaBar={props.allowEdit} allowEdit={props.allowEdit} showToolbar={props.allowEdit} data={[data]} />
        </div>
    );
}
