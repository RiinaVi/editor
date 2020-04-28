import React, {useEffect, useMemo, useState} from "react";
import axios from 'axios'
import Editor from "./Editor";
import RunButton from "./RunButton";
import RunTestsButton from "./RunTestsButton";
import runTests from "../utils/runTests";
import {runCode} from "../utils/getResult.js";
import './style/editors.scss'

const EditorsContainer = () => {

    const defaultJson = '{"a":1}';
    const defaultJS = 'console.log(SESSION[0].ref);';

    const [jsonCode, setJsonCode] = useState(defaultJson);
    const [jsCode, setJsCode] = useState(defaultJS);
    const [res, setRes] = useState('Nothing to show yet...');
    const [index, setIndex] = useState(0);
    const [data, setData] = useState(defaultJson);

    useMemo(() => {
        axios({
            method: 'get',
            url: 'https://riinavi.github.io/pacanam.json',
        }).then(res => {
            setData(res.data)
        });
    }, [setData]);

    useEffect(() => {
        setJsonCode(JSON.stringify(data[index], null, 4))
    }, [setJsonCode, data, index])

    return (
        <>
            <RunButton
                runCode={runCode} setRes={setRes} jsCode={jsCode} jsonCode={jsonCode}
            />
            <RunTestsButton
                runCode={runTests} setRes={setRes} jsCode={jsCode} jsonCode={jsonCode}
            />
            <div className={'editors'}>
                <Editor title={'JavaScript'} lang={'javascript'} code={jsCode} setCode={setJsCode}
                        defaultValue={defaultJS} height={(window.innerHeight-34)}/>
                <div>
                    <input type="number"
                           defaultValue={index}
                           min={0}
                           onFocus={(e) => e.target.select()}
                           onChange={e => setIndex(parseInt(e.target.value))}/>
                    <span className={'totalNum'}>/ {data.length}</span>
                    <Editor title={'JSON'} lang={'json'} code={jsonCode} setCode={setJsonCode}
                            defaultValue={defaultJson}
                            height={(window.innerHeight - 68) / 2}/>
                    <Editor title={'Result'} lang={'javascript'} code={res}
                            defaultValue={'Nothing to show yet...'} height={(window.innerHeight - 68) / 2}
                            readOnly={true}
                    />
                </div>
            </div>
        </>
    )
};

export default EditorsContainer;
