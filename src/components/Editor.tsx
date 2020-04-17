import React, {Dispatch, SetStateAction} from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";

type Props = {
    title: string,
    lang:string,
    code:string,
    setCode: Dispatch<SetStateAction<string>>,
    defaultValue: string
}


const Editor = ({title, lang, code, setCode, defaultValue}:Props) => {
    function onChange(newValue: any) {
        setCode(newValue);
    }

    return (
        <div className={'editorContainer'}>
            <h3 className={'title'}>{title}</h3>
            <AceEditor
                width={'450px'}
                height={window.innerHeight - 125 + 'px'}
                mode={lang}
                theme="monokai"
                onChange={onChange}
                name={title}
                editorProps={{$blockScrolling: true}}
                fontSize={14}
                value={code}
                defaultValue={defaultValue}
            />
        </div>
    )
};

export default Editor;
