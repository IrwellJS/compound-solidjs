import {Component, createMemo} from "solid-js";
import {Button, ButtonProps} from "../Button";
import {Position} from "../../../types";

import './styles.css';

export interface ChildItem {
    label: string;
    action: string | (() => void);
}

export interface DropdownProps {
    buttonProps: ButtonProps;
    children: Array<ChildItem>;
    menuPosition?: Position;
}

export interface DisplayA {
    href?: string;
    onClick?: () => void;
}

export const Dropdown: Component<DropdownProps> = (props) => {

    const mp  = createMemo(() => {
        return props.menuPosition || Position.Bottom;
    });

    return (
        <div class={`dropdown dropdown-${mp()}`}>
            <Button {...props.buttonProps} />
            <ul tabIndex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {props.children.map((child) => {
                    const aProps: DisplayA = {};
                    if (typeof child.action === 'string') {
                        aProps.href = child.action;
                    } else {
                        aProps.onClick = child.action;
                    }

                    return <li><a {...aProps}>{child.label}</a></li>;
                })}
            </ul>
        </div>
    );
}
