import React, {useState} from "react";
import ResultWindow from "./ResultWindow";
import './style/editors.scss'
import Header from "./Header";
import Editor from "./Editor";


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
    const [res, setRes] = useState('');
    const [hasError, setError] = useState(false);

    let logs: Array<string> = [];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function customLog(code: string) {
        // console.log(code);
        logs.push(code);
    }

    async function getResult() {
        setError(false);
        try {

            // eslint-disable-next-line no-eval,@typescript-eslint/no-unused-vars
            let SESSION = JSON.parse(jsonCode);
            // eslint-disable-next-line no-eval
            await eval(`${duplicateConsoleLog(jsCode)}`);
            setRes(logs.join('\n'));
            console.log(logs);
            logs = [];

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
