import {Component} from 'solid-js';

interface AppBarProps {
    logo: {
        label: string;
        alt?: string;
        onClick?: () => void;
        href?: string;
    };
}

export const AppBar: Component<AppBarProps> = (props) => {

    if (props.logo.onClick === undefined && props.logo.href !== undefined) {
        props.logo.onClick = () => {
            window.location.href = props.logo.href!;
        };
    }

    return (
        <nav class="navbar bg-base-200 shadow-xl">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl" onClick={props.logo.onClick}>
                    {props.logo.label}
                </a>
            </div>
            <div class="flex-none">
                sdfsdf
            </div>
        </nav>
    );
};
