/**
 * Created by hakan on 13/02/2017.
 */
import React from 'react'
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';

class RightAceEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.inRightAceEditor.editor.session.setUseWorker(false);
    }

    render() {
        return <AceEditor
            mode="json"
            theme="github"
            name="view_unique_json"
            width="100%"
            height="100%"
            readOnly
            fontSize={14}
            maxLines={50}
            ref={(input) => this.inRightAceEditor = input}
        />
    }
}

export default RightAceEditor;