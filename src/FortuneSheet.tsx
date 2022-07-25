import { FortuneSheetContainerProps } from "../typings/FortuneSheetProps";

export default function (props: FortuneSheetContainerProps) {
    console.log(props);

    return (
        <div>
            hello {props.sampleText} and your value is
        </div>
    );
}
