import {Size} from '../types';
import {Component, JSXElement} from 'solid-js';

export interface ButtonProps {
    size?: Size;
    children?: JSXElement;
}

export const Button: Component<ButtonProps> = (props) => {
    return <button>{props.children}</button>
}
