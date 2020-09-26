import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import './editor.css'

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props) {

    const {
        langauge,
        displayName,
        value,
        onChange
    } = props;
    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className="editor-Container" >
            <div className="editor-top">
                {displayName}
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}

                className='code-mirror-wrapper'
                options={{

                    lineWrapping: true,
                    lint: true,
                    mode: langauge,
                    theme: 'material',
                    lineNumbers: true
                }}
            >

            </ControlledEditor>
        </div>

    )
}
