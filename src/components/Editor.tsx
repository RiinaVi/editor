import React, {Dispatch, SetStateAction, useState, useLayoutEffect} from "react";
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
    readOnly?: boolean
}


function useWindowSize(height:number) {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth,height]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [height]);
    return size;
}


const Editor = ({title, lang, code, setCode, defaultValue, height, readOnly}: Props) => {
    function onChange(newValue: any) {
        !readOnly && setCode && setCode(newValue);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [windowWidth, windowHeight] = useWindowSize(height);

    return (
        <div className={'editorContainer'}>
            <h3 className={'title'}>{title}</h3>
            <AceEditor
                width={windowWidth / 2 - 2 + 'px'}
                height={(height).toString() + 'px'}
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
