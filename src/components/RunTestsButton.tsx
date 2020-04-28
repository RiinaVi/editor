import React, {Dispatch, SetStateAction} from "react";
import {Button, Tooltip, OverlayTrigger} from "react-bootstrap";
import './style/editors.scss'

type Props = {
    runCode: any,
    setRes: Dispatch<SetStateAction<string>>,
    jsonCode: string,
    jsCode: string
}

function renderTooltip(props: any) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Not available yet...
        </Tooltip>
    );
}

const RunTestsButton = (
    {runCode, setRes, jsCode, jsonCode}: Props) => {
    return (
        <OverlayTrigger
            placement="top"
            delay={{show: 250, hide: 400}}
            overlay={renderTooltip}
        >
            <Button
                className={'runTestsButton'} style={{cursor: "not-allowed"}}
                // onClick={() => runCode(setRes, jsonCode, jsCode)}
                variant="warning">Run tests
            </Button>
        </OverlayTrigger>
    )
};

export default RunTestsButton;
