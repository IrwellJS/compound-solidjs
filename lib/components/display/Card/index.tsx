import {Component, JSXElement} from "solid-js";
import {Button} from "../../inputs";
import {Fit, Size, Variant} from "../../../types";

import './styles.css';

export interface CardProps {
    heading?: JSXElement | string,
    content: JSXElement | string,
    footer?: JSXElement | string,
}

export const Card: Component<CardProps> = (props) => {
    return (
        <div class="crd">
            {props.heading &&
                <div class="crd-heading">
                    {props.heading}
                </div>
            }
            <div class="crd-content">
                {props.content}
            </div>
            {props.footer &&
                <div class="bg-gray-50">
                    {props.footer}
                </div>
            }
        </div>
    );
}

export interface OneActionCardProps {
    title: string;
    description: string;
    actionLabel: string;
    actionClick: () => void;
}

export const OneActionCard: Component<OneActionCardProps> = (props) => {
    return (
        <Card
            heading={props.title}
            content={props.description}
            footer={<Button variant={Variant.Primary} fit={Fit.Block} size={Size.Sm} onClick={props.actionClick}>{props.actionLabel}</Button>}
        />
    );
}
