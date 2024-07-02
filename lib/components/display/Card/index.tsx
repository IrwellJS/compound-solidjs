import {Component, JSXElement} from "solid-js";

import './styles.css';
import {Button} from "../../inputs";
import {Fit, Size, Variant} from "../../../types";
import React from "react";

export interface CardProps {
    heading?: JSXElement | string,
    content: JSXElement | string,
    footer?: JSXElement | string,
}

export const Card: Component<CardProps> = (props) => {
    return (
        <div class="card">
            {props.heading &&
                <div class="card-heading">
                    {props.heading}
                </div>
            }
            <div class="card-content">
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
            footer={<Button variant={Variant.Primary} fit={Fit.Block} size={Size.Sm} onClick={props.actionClick}>props.actionLabel</Button>}
        />
    );
}
