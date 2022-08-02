import { FortuneSheetContainerProps } from "../typings/FortuneSheetProps";

import { Workbook } from "@fortune-sheet/react";
import "./ui/index.scss";

import formula from "./formula";
import classNames from "classnames";


export default function (props: FortuneSheetContainerProps) {

    return (
        <div style={props.style} className={classNames('mendixcn-fortune-sheet', props.class)}>
            <Workbook showFormulaBar={props.allowEdit} allowEdit={props.allowEdit} showToolbar={props.allowEdit} data={[formula]} />
        </div>
    );
}
