import {Padding} from "../../types";

import './styles.css';

export interface PartialPaddingProps {
    padding?: Padding;
}

export const getPaddingClass = (props: PartialPaddingProps) => {
    return `padding-${props.padding || Padding.None}`;
}
