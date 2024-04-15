import type {Meta, StoryObj} from 'storybook-solidjs';

import {Spinner, SpinnerProps} from "./";
import {AllVariants, Size} from "../../../types";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Spinner> = {
    title: 'Components/Display/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'The variant styling.',
            defaultValue: AllVariants.Basic,
            options: Object.values(AllVariants),
            mapping: AllVariants,
            control: {
                type: 'select',
            },
        },
        size: {
            description: 'The variant size.',
            defaultValue: Size.Md,
            options: Object.values(Size),
            mapping: AllVariants,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<SpinnerProps>): Story => {
    return {
        args: {
            children: <p>Some content</p>,
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic_Indicator: Story = getStory({
});

export const Basic: Story = getStory({});