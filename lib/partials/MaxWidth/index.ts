import {MaxWidth} from "../../types";

import './styles.css';

export interface PartialMaxWidthProps {
    maxWidth?: MaxWidth;
}

export const getMaxWidthClass = (props: PartialMaxWidthProps) => {
    return `max-w-${props.maxWidth || MaxWidth.Inherit}`;
}
