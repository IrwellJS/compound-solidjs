import {Component, JSXElement, splitProps} from 'solid-js';
import {NoteVariant, Size, Variant} from '../../../types';
import Badge from '../Badge';

// This is a safe list of classes so that the tree shaking can run correctly on css
const classSafeList = [
    'badge-primary',
    'badge-secondary',
    'badge-accent',
    'badge-neutral',
    'badge-accent',
    'badge-ghost',
];

export interface IndicatorProps {
    children: string | JSXElement;
    label: string;
    variant: Variant | NoteVariant;
    size?: Size;
}

export const Indicator: Component<IndicatorProps> = (props) => {

    const [local, rest] = splitProps(props, [
        'children',
        'label',
    ]);

    return (
        <div class="indicator">
            <Badge extraClasses="indicator-item" {...rest}>{local.label}</Badge>
            {local.children}
        </div>
    );
}

export default Indicator;
