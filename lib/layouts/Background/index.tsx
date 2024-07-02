import {Component, JSXElement} from "solid-js";

import './styles.css';

export enum BackgroundType {
    Primary = "Primary",
    Secondary = "Secondary",
    Lime = "Lime"
}

export interface BackgroundProps {
    type: BackgroundType;
    children: JSXElement;
}

export const Background: Component<BackgroundProps> = (props) => {
    return <div classList={{
        'background': true,
        'background-primary': props.type == BackgroundType.Primary,
        'background-secondary': props.type == BackgroundType.Secondary,
        'background-lime': props.type == BackgroundType.Lime,
    }}>{props.children}</div>
}
