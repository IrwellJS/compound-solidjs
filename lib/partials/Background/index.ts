import {BackgroundType} from "../../types";

import './styles.css';

export interface PartialBackgroundProps {
    backgroundType?: BackgroundType;
}

export const getBackgroundClass = (props: PartialBackgroundProps): string => {
    return `background-${props.backgroundType || 'default'}`;
}
