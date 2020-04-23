import React, {Dispatch, SetStateAction} from "react";
import {Button} from "react-bootstrap";
import './style/editors.scss'

type Props = {
    runCode: any,
    setError: Dispatch<SetStateAction<boolean>>,
    setRes: Dispatch<SetStateAction<string>>,
    jsonCode: string,
    jsCode: string
}

const RunButton = (
    {runCode, setError, setRes, jsCode, jsonCode}: Props
) => {
    return (
        <Button className={'runButton'} onClick={() => runCode(setError, setRes, jsonCode, jsCode)}
                variant="success">Run</Button>
    )
};

export default RunButton;
