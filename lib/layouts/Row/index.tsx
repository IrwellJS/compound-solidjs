import {Component, createEffect, createSignal, JSXElement} from "solid-js";
import {Size} from "../../types";

export interface RowProps {
    children: JSXElement;
    spacing?: Size;
}

const gap = new Map([
    [Size.Xs, 'gap-1'],
    [Size.Sm, 'gap-2'],
    [Size.Md, 'gap-4'],
    [Size.Lg, 'gap-8'],
]);

export const Row: Component<RowProps> = (props) => {
    const [classes, setClasses] = createSignal<string>('flex flex-row flex-auto');
    const g = gap.get(props.spacing || Size.Sm);
    createEffect(() => {
        setClasses(`flex flex-row flex-auto ${g}`);
    });

    return (
        <div class={classes()}>
            {props.children}
        </div>
    );
}
