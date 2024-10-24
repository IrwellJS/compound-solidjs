import {Component, createEffect, createSignal, splitProps} from 'solid-js';
import {CanBeJoinChild, NoteVariant, Size} from '../../../types';

const classSafeList = [
    'input-info',
    'input-success',
    'input-warning',
    'input-error',
    'input-xs',
    'input-sm',
    'input-lg',
    'text-xs',
    'text-sm'
];
const initClasses = 'input input-bordered w-full';

interface InputProps extends CanBeJoinChild  {
    label?: string;
    labelExtra?: string;
    placeholder?: string;
    variant?: NoteVariant;
    size?: Size;
    disabled?: boolean;
    value?: string;

    // Generic HTML events
    onChange?: (event: InputEvent) => void;
    onInput?: (event: InputEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
}

const localKeys: Array<keyof InputProps> = ['label', 'labelExtra', 'variant', 'size', 'isJoinChild'];

const getLabel = (props: InputProps) => {
    if (!props.label && !props.labelExtra) {
        return null;
    }

    return (
        <div class="label">
            {props.label && <span class={`block text-${props.size == Size.Xs || props.size == Size.Sm ? "xs" : "sm"} font-semibold text-gray-600`}>{props.label}</span>}
            {props.labelExtra && <span class="label-text-alt">{props.labelExtra}</span>}
        </div>
    );
}

export const Field: Component<InputProps> = (props) => {

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

        if (local.isJoinChild) {
            c += ` join-item`;
        }

        setClasses(c);
    });

    return (
        <label class="form-control w-full">
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
