import {Component} from "solid-js";

import './styles.css';

export interface CodeblockProps {
    code: string;
}

export const Codeblock: Component<CodeblockProps> = (props) => {
    return (
        <pre class="codeblock">
            <code>
                {props.code}
            </code>
        </pre>
    );
}

export default Codeblock;
