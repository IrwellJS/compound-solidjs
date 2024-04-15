import {Component} from "solid-js";
import {Size, Variant} from "../../../types";

import './styles.css';

export interface SpinnerProps {
    variant?: Variant;
    size?: Size;
}

export const Spinner: Component<SpinnerProps> = (props) => {
    return <span class={`spinner spinner-${props.size || 'md'} spinner-${props.variant || 'primary'}`}></span>;
}

export default Spinner;
