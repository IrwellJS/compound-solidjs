import {AllVariants} from "../../types";

import './styles.css';

enum GradientBackground {
    Azure = 'azure',
    Butterfly = 'butterfly',
    Lime = 'lime',
    Malibu = 'malibu',
    Mojito = 'mojito',
    Neon = 'neon',
    Peach = 'peach',
}

export const BackgroundType = {...AllVariants, ...GradientBackground};
export type BackgroundType = typeof BackgroundType;

export interface PartialBackgroundProps {
    backgroundType?: BackgroundType;
}

export const getBackgroundClass = (props: PartialBackgroundProps): string => {
    return `background-${props.backgroundType || 'default'}`;
}
