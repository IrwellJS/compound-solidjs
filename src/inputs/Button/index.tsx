import {Component, mergeProps, splitProps} from 'solid-js';
import './styles.css';
import {Fit, Size, Variant} from '../../types';

export interface ButtonProps {
    children: string;
    fit?: Fit;
    size?: Size;
    variant?: Variant;

    onClick?: () => void;
    disabled?: boolean;
}

export const ButtonDefaultProps: Partial<ButtonProps> = {
    fit: Fit.Inline,
    size: Size.Medium,
    variant: Variant.Primary,
    disabled: false,
}

/**
 * Primary UI component for user interaction
 */
export const Button: Component<ButtonProps> = (props) => {
    props = mergeProps(ButtonDefaultProps, props);
    const [local, rest] = splitProps(props, [
        'children',
        'fit',
        'size',
        'variant',
    ]);

    return (
        <button
            {...rest}
            type="button"
            classList={{
                'btn': true,
                'btn-justify': local.fit === Fit.Justify,
                'btn-small': local.size === Size.Small,
                'btn-medium': local.size === Size.Medium,
                'btn-large': local.size === Size.Large,
                'btn-primary': local.variant === Variant.Primary,
                'btn-secondary': local.variant === Variant.Secondary,
            }}
        >{local.children}</button>
    );
};
