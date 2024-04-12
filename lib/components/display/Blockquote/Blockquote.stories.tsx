import type {Meta, StoryObj} from 'storybook-solidjs';

import Blockquote, {BlockquoteProps} from "./index";
import {AllVariants} from "../../../types";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Blockquote> = {
    title: 'Components/Display/Blockquote',
    component: Blockquote,
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
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<BlockquoteProps>): Story => {
    return {
        args: {
            children: 'content 2',
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic_Indicator: Story = getStory({
    children: 'random content',
});

export const Basic: Story = getStory({});
