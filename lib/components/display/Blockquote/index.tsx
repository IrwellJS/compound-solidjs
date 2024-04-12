import {Component, JSXElement} from "solid-js";
import {AllVariants} from "../../../types";

import './styles.css';

const classSafeList = [
    'blockquote-primary',
    'blockquote-secondary',
    'blockquote-accent',
    'blockquote-neutral',
    'blockquote-accent',
    'blockquote-ghost',
    'blockquote-info',
    'blockquote-success',
    'blockquote-warning',
    'blockquote-error',
    'blockquote-outline',
];

export interface BlockquoteProps {
    variant?: AllVariants;
    children: JSXElement;
}

const Blockquote: Component<BlockquoteProps> = (props) => {
    return (
        <blockquote class={`blockquote blockquote-${(props.variant || AllVariants.Basic)}`}>
            {props.children}
        </blockquote>
    );
}

export default Blockquote;
