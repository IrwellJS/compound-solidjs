import {Component, splitProps} from 'solid-js';

interface InputPassthroughs {
    onInput?: (e: InputEvent) => void;
}
interface InputProps extends InputPassthroughs {
    label?: string;
}

const FieldGroup: Component<InputProps> = (props) => {

    const [local, rest] = splitProps(props, [
        'label',
    ]);

    return (
        <>
            {local.label && <label class="text-sm font-medium text-slate-700">{local.label}</label>}
            <input
                class="w-full border border-gray-300 rounded-md px-2 py-2 text-sm drop-shadow-sm focus:outline-indigo-600 text-slate-700"
                type="text"
                {...rest}
            />
        </>
    );
}

export default FieldGroup
