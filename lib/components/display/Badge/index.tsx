import {Component, JSXElement} from 'solid-js';
import {AllVariants, NoteVariant, Size, Variant} from '../../../types';

// This is a safe list of classes so that the tree shaking can run correctly on css
const classSafeList = [
    'badge-primary',
    'badge-secondary',
    'badge-accent',
    'badge-neutral',
    'badge-accent',
    'badge-ghost',
    'badge-info',
    'badge-success',
    'badge-warning',
    'badge-error',
    'badge-outline',
    'badge-xs',
    'badge-sm',
    'badge-md',
    'badge-lg',
];

export interface BadgeProps {
    variant: Variant | NoteVariant;
    children: string | JSXElement;
    outline?: boolean;
    size?: Size;
    extraClasses?: string;
}

export const Badge: Component<BadgeProps> = (props) => {
    return (
        <span
            class={`badge badge-${props.variant} badge-${props.size} ${props.outline ? 'badge-outline' : ''} ${props.extraClasses ? props.extraClasses : ''}`}
        >{props.children}</span>
    );
}

export default Badge;
