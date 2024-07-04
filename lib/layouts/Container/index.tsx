import {Component, JSXElement} from "solid-js";
import {getBackgroundClass, PartialBackgroundProps} from "../../partials/Background";
import {MaxWidth} from "../../types";

// This is a safe list of classes so that the tree shaking can run correctly on css
const classSafeList = [
    'max-w-xs',
    'max-w-sm',
    'max-w-md',
    'max-w-lg',
    'max-w-xl',
    'max-w-2xl',
    'max-w-3xl',
    'max-w-4xl',
    'max-w-5xl',
    'max-w-6xl',
    'max-w-7xl',
    'max-w-full',
];

export interface ContainerProps extends PartialBackgroundProps {
    children?: JSXElement;
    maxWidth?: MaxWidth;
}

export const Container: Component<ContainerProps> = (props) => {
    return (
        <div class={`max-w-${props.maxWidth || MaxWidth.Xl7} ${getBackgroundClass(props)} m-auto`}>
            {props.children}
        </div>
    );
}
