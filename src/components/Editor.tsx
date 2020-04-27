import React, {Dispatch, SetStateAction} from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";

type Props = {
    title: string,
    lang: string,
    code: string,
    setCode?: Dispatch<SetStateAction<string>>,
    defaultValue: string,
    height: number,
    readOnly?:boolean
}


const Editor = ({title, lang, code, setCode, defaultValue, height, readOnly}: Props) => {
    function onChange(newValue: any) {
        !readOnly && setCode && setCode(newValue);
    }

    return (
        <div className={'editorContainer'}>
            <h3 className={'title'}>{title}</h3>
            <AceEditor
                width={window.innerWidth/2+'px'}
                height={(height).toString()+'px'}
                mode={lang}
                theme="monokai"
                onChange={onChange}
                name={title}
                wrapEnabled={true}
                editorProps={{$blockScrolling: true}}
                fontSize={14}
                value={code}
                defaultValue={defaultValue}
                readOnly={readOnly}
            />
        </div>
    )
};

export default Editor;
