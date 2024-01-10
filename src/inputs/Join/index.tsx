import {Component, createEffect, createSignal, JSXElement, splitProps} from 'solid-js';
import {Orientation} from '../../types';

const classSafeList = [
    'join-vertical',
];
const initialClasses = 'join';

export interface JoinProps {
    orientation?: Orientation;
    children?: JSXElement
}

const Join: Component<JoinProps> = (props) => {

    const [local, rest] = splitProps(props, [
        'orientation',
    ]);

    const [classes, setClasses] = createSignal<string>(initialClasses);
    createEffect(() => {
        let c = initialClasses;

        if (local.orientation) {
            c += ` join-${local.orientation}`;
        }

        setClasses(c);
    });

    return (
        <div class={classes()}>
            {rest.children}
        </div>
    );
}

export default Join;
