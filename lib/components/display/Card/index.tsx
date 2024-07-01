import {Component, JSXElement} from "solid-js";

import './styles.css';

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
