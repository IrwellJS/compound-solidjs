import type {Meta, StoryObj} from 'storybook-solidjs';

import {Container, ContainerProps} from './index';
import {BackgroundType, MaxWidth} from "../../types";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Container> = {
    title: 'Components/Layout/Container',
    component: Container,
    tags: ['autodocs'],
    argTypes: {
        backgroundType: {
            description: 'The background colour type',
            defaultValue: BackgroundType.Primary,
            options: Object.values(BackgroundType),
            mapping: BackgroundType,
            control: {
                type: 'select',
            },
        },
        maxWidth: {
            description: 'Max Width of container',
            defaultValue: MaxWidth.Xl7,
            options: Object.values(MaxWidth),
            mapping: MaxWidth,
            control: {
                type: 'select',
            },
        },
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<ContainerProps>): Story => {
    return {
        args: {
            type: BackgroundType.Basic,
            children: 'My content',
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic_Container: Story = getStory({});
