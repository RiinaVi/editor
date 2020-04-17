import React, {useState} from "react";
import ResultWindow from "./ResultWindow";
import './style/editors.scss'
import Header from "./Header";
import Editor from "./Editor";


const EditorsContainer = () => {

    const defaultJson = '{"a":1}';
    const defaultJS = 'console.log(SESSION.a)';

    const [jsonCode, setJsonCode] = useState(defaultJson);
    const [jsCode, setJsCode] = useState(defaultJS);
    const [res, setRes] = useState('');
    const [hasError, setError] = useState(false);

    let logs: any = [];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function customLog(code:string) {
        console.log(code);
        logs.push(code);
    }

    function getResult() {
        setError(false);
        try {

            // eslint-disable-next-line no-eval,@typescript-eslint/no-unused-vars
            let SESSION = JSON.parse(jsonCode);
            // eslint-disable-next-line no-eval
            eval(`${duplicateConsoleLog(jsCode)}`);
            setRes(logs.join('\n'));

        } catch (e) {
            setError(true);
            setRes(`Error!\n${e}`);
            console.log(e.message, e)
        }
    }

    function duplicateConsoleLog(code: string): string {
        code = code.replace(/console\.log/g, 'customLog');
        return code;
    }

    return (
        <>
            <Header getResult={getResult}/>
            <div className={'editors'}>
                <Editor title={'JSON'} lang={'json'} code={jsonCode} setCode={setJsonCode} defaultValue={defaultJson}/>
                <Editor title={'JavaScript'} lang={'javascript'} code={jsCode} setCode={setJsCode}
                        defaultValue={defaultJS}/>
                <ResultWindow error={hasError} result={res} setResult={setRes}/>
            </div>
        </>
    )
};

export default EditorsContainer;
