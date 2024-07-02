import type {Meta, StoryObj} from 'storybook-solidjs';

import {Background, BackgroundProps, BackgroundType} from './index';
import {AllVariants} from "../../types";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Background> = {
    title: 'Components/Layout/Background',
    component: Background,
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: 'The background colour type',
            defaultValue: BackgroundType.Primary,
            options: Object.values(BackgroundType),
            mapping: BackgroundType,
            control: {
                type: 'select',
            },
        },
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<BackgroundProps>): Story => {
    return {
        args: {
            type: BackgroundType.Primary,
            children: 'my badge',
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic_Badge: Story = getStory({});
