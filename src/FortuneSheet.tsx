import { FortuneSheetContainerProps } from "../typings/FortuneSheetProps";

import { Workbook } from "@fortune-sheet/react";
import "./ui/index.scss";

import formula from "./formula";
import classNames from "classnames";


export default function (props: FortuneSheetContainerProps) {
    console.log(props);

    return (
        <div style={props.style} className={classNames('mendixcn-fortune-sheet', props.class)}>
            <Workbook showFormulaBar={false} allowEdit={false} showToolbar={false} data={[formula]} />
        </div>
    );
}
