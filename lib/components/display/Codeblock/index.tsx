import {Component, Show} from "solid-js";

import './styles.css';

export interface CodeblockProps {
    code: string;
    inline?: boolean;
}

export const Codeblock: Component<CodeblockProps> = (props) => {
    return <Show when={props.inline} fallback={<pre class="codeblock"><code>{props.code}</code></pre>}>
        <code class="codeblock codeblock-inline">{props.code}</code>
    </Show>
}

export default Codeblock;
