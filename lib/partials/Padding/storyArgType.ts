import {Padding} from "../../types";

export const padding = {
    description: 'Object padding',
    defaultValue: Padding.None,
    options: Object.values(Padding),
    mapping: Padding,
    control: {
        type: 'select',
    },
};
