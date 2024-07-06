import {GradientBackground, NoteVariant, Variant} from "../../types";

export const backgroundType = {
    description: 'The background colour type',
    defaultValue: Variant.Primary,
    options: Object.values({...Variant, ...NoteVariant, ...GradientBackground}),
    mapping: {...Variant, ...NoteVariant, ...GradientBackground},
    control: {
        type: 'select',
    },
};
