import { FortuneSheetContainerProps } from "../typings/FortuneSheetProps";

import { Workbook } from "@fortune-sheet/react";
import "./ui/index.scss";

import formula from "./formula";


export default function (props: FortuneSheetContainerProps) {
    console.log(props);

    return (
        <div className="mendixcn-fortune-sheet">
            <Workbook data={[formula]} />
        </div>
    );
}
