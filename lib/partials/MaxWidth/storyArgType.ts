import {MaxWidth} from "../../types";

export const maxWidth = {
    description: 'Object max-width',
    defaultValue: MaxWidth.Inherit,
    options: Object.values(MaxWidth),
    mapping: MaxWidth,
    control: {
        type: 'select',
    },
};
