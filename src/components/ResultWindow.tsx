import React, {Dispatch, SetStateAction} from "react";
import {Button} from "react-bootstrap";

type Props = {
    result: string
    setResult: Dispatch<SetStateAction<string>>
    error: boolean
}

const ResultWindow = ({result, setResult, error}: Props) => {
    const emptyMessage = `Nothing to show yet...`;
    return (
        <div className={'editorContainer resultContainer'}>
            <h3 className={'title'}>Result
                <Button variant={'dark'} onClick={() => setResult(emptyMessage)}>Clear</Button>
            </h3>
            <div className={ error ? 'result error' : 'result'}>
                {result ? result : emptyMessage}
            </div>
        </div>
    )
};

export default ResultWindow;
