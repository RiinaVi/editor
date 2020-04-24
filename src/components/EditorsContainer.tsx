import React, {useState} from "react";
import './style/editors.scss'
import Editor from "./Editor";
import RunButton from "./RunButton";
import RunTestsButton from "./RunTestsButton";
import runTests from "../utils/runTests";
const {runCode} = require( "../utils/getResult.js");

const EditorsContainer = () => {

    const defaultJson = '{"a":1}';
    const defaultJS = 'fetch("http://64.227.78.13:1001")\n' +
        '.then(function(response) {\n' +
        '    // response.text() возвращает новый промис,\n' +
        '    // который выполняется и возвращает полный ответ сервера,\n' +
        '    // когда он загрузится\n' +
        '\n' +
        '    return response.text();\n' +
        '  })\n' +
        '  .then(function(text) {\n' +
        '    // ...и здесь содержимое полученного файла\n' +
        '    console.log(text);\n' +
        '    //alert(text); // {"name": "iliakan", isAdmin: true}\n' +
        '  });\n' +
        '// console.log(SESSION.a + Math.max(10, 20))';

    const [jsonCode, setJsonCode] = useState(defaultJson);
    const [jsCode, setJsCode] = useState(defaultJS);
    const [res, setRes] = useState('Nothing to show yet...');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [hasError, setError] = useState(false);

    return (
        <>
            <RunButton
                runCode={runCode} setError={setError} setRes={setRes} jsCode={jsCode} jsonCode={jsonCode}
            />
            <RunTestsButton
                runCode={runTests} setError={setError} setRes={setRes} jsCode={jsCode} jsonCode={jsonCode}
            />
            <div className={'editors'}>
                <Editor title={'JavaScript'} lang={'javascript'} code={jsCode} setCode={setJsCode}
                        defaultValue={defaultJS} height={(window.innerHeight)}/>
                        <div>
                            <Editor title={'JSON'} lang={'json'} code={jsonCode} setCode={setJsonCode}
                                    defaultValue={defaultJson}
                                    height={(window.innerHeight-34) / 2}/>
                            <Editor title={'Result'} lang={'javascript'} code={res}
                                    defaultValue={'Nothing to show yet...'} height={(window.innerHeight-34)/2}
                                    readOnly={true}
                            />
                        </div>
            </div>
        </>
    )
};

export default EditorsContainer;
