import {Component, createEffect, JSXElement} from "solid-js";

import './styles.css';
import {createBreakpoints} from "@solid-primitives/media";
import {getBackgroundClass, PartialBackgroundProps} from "../../partials/Background";

export interface PanelingChild {
    label: string;
    children: JSXElement;
}

export interface PanelingProps extends PartialBackgroundProps {
    children : PanelingChild[];
}


export const Paneling: Component<PanelingProps> = (props) => {

    const openClass = 'open';
    const closedClass = 'closed';
    let header!: HTMLDivElement;
    let panels!: HTMLDivElement;
    const matches = createBreakpoints({
        md: "768px",
        xl: "1280px",
    });

    const getCurrentRight = (): {label: Element, content: Element} => {
        const he = header.getElementsByClassName(openClass);
        const pe = panels.getElementsByClassName(openClass);

        if (he.length > 1 || pe.length > 1) {
            console.log('something has gone wrong');
        }

        if (he.length == 1 && pe.length == 1) {
            return {
                label: he[0],
                content: pe[0]
            };
        }

        let defaultIndex = 0;
        if (matches.xl) {
            defaultIndex = 2;
        } else if (matches.md) {
            defaultIndex = 1;
        }

        return {
            label: getElementByIndex(header, defaultIndex),
            content: getElementByIndex(panels, defaultIndex),
        };
    }
    const getElementByIndex = (parent: HTMLDivElement, index: number): Element => {
        return Array.from(parent.children)[index];
    }

    const onClick = (index: number) => {

        if (matches.xl && index < 2) {
            return;
        } else if (matches.md && index < 1) {
            return;
        }

        const clickedLabel = getElementByIndex(header, index);
        const clickedContent = getElementByIndex(panels, index);

        // remove old classes
        const {label, content} = getCurrentRight();
        label.classList.remove(openClass);
        label.classList.add(closedClass);
        content.classList.remove(openClass);
        content.classList.add(closedClass);

        // add new classes
        clickedLabel.classList.remove(closedClass);
        clickedLabel.classList.add(openClass);
        clickedContent.classList.remove(closedClass);
        clickedContent.classList.add(openClass);
    }

    const removeClassFromAll = (parent: Element, c: string) => {
        Array.from(parent.getElementsByClassName(c)).forEach(element => element.classList.remove(c));
    }

    const removeOpenAndClose = () => {
        removeClassFromAll(panels, openClass);
        removeClassFromAll(panels, closedClass);
        removeClassFromAll(header, openClass);
        removeClassFromAll(header, closedClass);
    }

    let wasMd = matches.md;
    let wasXl = matches.xl;
    createEffect(() => {
        if (matches.md != wasMd || matches.xl != wasXl) {
            wasMd = matches.md;
            wasXl = matches.xl;
            removeOpenAndClose();
        }
    });

    const labels: JSXElement[] = [];
    const content: JSXElement[] = [];
    props.children.forEach((child, index) => {
        labels.push(<div onClick={() => onClick(index)}>{child.label}</div>);
        content.push(<div>{child.children}</div>);
    });

    return (
        <div class={`paneling ${getBackgroundClass(props)}`}>
            <div class="paneling-header" ref={header}>{labels}</div>
            <div class="paneling-panels" ref={panels}>{content}</div>
        </div>
    );
}
