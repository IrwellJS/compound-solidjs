import {Component, JSXElement} from "solid-js";
import {getBackgroundClass, PartialBackgroundProps} from "../../partials/Background";
import {getPaddingClass, PartialPaddingProps} from "../../partials/Padding";
import {getMaxWidthClass, PartialMaxWidthProps} from "../../partials/MaxWidth";

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
    'max-w-auto',
];

export interface ContainerProps extends
    PartialBackgroundProps,
    PartialPaddingProps,
    PartialMaxWidthProps
{
    children?: JSXElement;
}

export const Container: Component<ContainerProps> = (props) => {
    return (
        <div class={`m-auto ${getMaxWidthClass(props)} ${getBackgroundClass(props)} ${getPaddingClass(props)}`}>
            {props.children}
        </div>
    );
}
