import {BackgroundType} from "../../types";

import './styles.css';

// This is a safe list of classes so that the tree shaking can run correctly on css
const classSafeList = [
    'background-badge',
    'background-primary',
    'background-secondary',
    'background-accent',
    'background-neutral',
    'background-accent',
    'background-ghost',
    'background-info',
    'background-success',
    'background-warning',
    'background-error',
    'background-azure',
    'background-butterfly',
    'background-lime',
    'background-malibu',
    'background-mojito',
    'background-neon',
    'background-peach',
];

export interface PartialBackgroundProps {
    backgroundType?: BackgroundType;
}

export const getBackgroundClass = (props: PartialBackgroundProps): string => {
    return `background-${props.backgroundType || 'default'}`;
}
