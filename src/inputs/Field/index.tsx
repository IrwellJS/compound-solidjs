import {Component, createEffect, createSignal, splitProps} from 'solid-js';
import {NoteVariant, Size} from '../../types';

const classSafeList = [
    'input-info',
    'input-success',
    'input-warning',
    'input-error',
    'input-xs',
    'input-sm',
    'input-lg',
];
const initClasses = 'input input-bordered w-full max-w-xs';

interface InputProps  {
    label?: string;
    labelExtra?: string;
    placeholder?: string;
    variant?: NoteVariant;
    size?: Size;
    disabled?: boolean;
}

const localKeys: Array<keyof InputProps> = ['label', 'labelExtra', 'variant', 'size'];

const getLabel = (props: InputProps) => {
    if (!props.label && !props.labelExtra) {
        return null;
    }

    return (
        <div class="label">
            {props.label && <span class="label-text">{props.label}</span>}
            {props.labelExtra && <span class="label-text-alt">{props.labelExtra}</span>}
        </div>
    );
}

const Field: Component<InputProps> = (props) => {

    const [local, rest] = splitProps(props, localKeys);
    const [classes, setClasses] = createSignal(initClasses);

    createEffect(() => {
        let c = initClasses;
        if (local.variant) {
            c += ` input-${local.variant}`;
        }

        if (local.size) {
            c += ` input-${local.size}`;
        }

        setClasses(c);
    });

    return (
        <label class="form-control w-full max-w-xs">
            {getLabel(local)}
            <input
                class={classes()}
                type="text"
                {...rest}
            />
        </label>
    );
}

export default Field
