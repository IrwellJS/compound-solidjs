import {Component, createEffect, createSignal, JSXElement, mergeProps, splitProps} from 'solid-js';
import {CanBeJoinChild, Fit, Shape, Size, Variant} from '../../../types';

export interface ButtonProps extends CanBeJoinChild {
    children: JSXElement | string;
    fit?: Fit;
    size?: Size;
    shape?: Shape;
    variant?: Variant;

    onClick?: () => void;
    disabled?: boolean;
}

export const ButtonDefaultProps: Required<ButtonProps> = {
    children: '',
    fit: Fit.Inline,
    size: Size.Md,
    shape: Shape.Rectangle,
    variant: Variant.Basic,
    onClick: () => {},
    disabled: false,
    isJoinChild: false,
}

// This is a safe list of classes so that the tree shaking can run correctly on css
const classSafeList = [
    'btn-xs',
    'btn-sm',
    'btn-md',
    'btn-lg',
    'btn-inline',
    'btn-justify',
    'btn-primary',
    'btn-secondary',
    'btn-neutral',
    'btn-accent',
    'btn-ghost',
    'btn-link',
    'btn-block',
    'btn-circle',
    'btn-square',
];

/**
 * Primary UI component for user interaction
 */
export const Button: Component<ButtonProps> = (props) => {
    props = mergeProps(ButtonDefaultProps, props);
    const [local, rest] = splitProps(props, [
        'children',
        'fit',
        'size',
        'shape',
        'variant',
        'isJoinChild'
    ]);

    const [classes, setClasses] = createSignal<string>('btn');
    createEffect(() => {
        setClasses(`btn
            btn-${local.size}
            btn-${local.fit}
            btn-${local.variant}
            btn-${local.shape}
            ${(local.isJoinChild ? 'join-item' : '')}
        `);
    });

    return (
        <button
            {...rest}
            type="button"
            class={classes()}
        >{local.children}</button>
    );
};
