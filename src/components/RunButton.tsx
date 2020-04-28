import React, {Dispatch, SetStateAction} from "react";
import {Button} from "react-bootstrap";
import './style/editors.scss'

type Props = {
    runCode: any,
    setRes: Dispatch<SetStateAction<string>>,
    jsonCode: string,
    jsCode: string
}

const RunButton = (
    {runCode, setRes, jsCode, jsonCode}: Props
) => {
    return (
        <Button className={'runButton'} onClick={() => runCode(setRes, jsonCode, jsCode)}
                variant="success">Run</Button>
    )
};

export default RunButton;
