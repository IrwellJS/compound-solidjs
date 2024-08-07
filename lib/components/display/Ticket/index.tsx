import {Component, JSXElement} from "solid-js";
import {getBackgroundClass, PartialBackgroundProps} from "../../../partials/Background";

import './styles.css';

export interface TicketProps extends PartialBackgroundProps {
    header?: string | JSXElement;
    content: string | JSXElement;
    footer?: string | JSXElement;
}

export const Ticket: Component<TicketProps> = (props) => {
    return (
        <div class={`ticket ${getBackgroundClass(props)}`}>
            {props.header && <div class="ticket-header">{props.header}</div>}
            <div class="ticket-content">{props.content}</div>
            {props.footer && <div class="ticket-footer">{props.footer}</div>}
        </div>
    );
}

export default Ticket;
