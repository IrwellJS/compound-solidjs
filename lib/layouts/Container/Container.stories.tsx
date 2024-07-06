import type {Meta, StoryObj} from 'storybook-solidjs';

import {Container, ContainerProps} from './index';
import {Padding} from "../../types";
import {backgroundType} from "../../partials/Background/storyArgType";
import {padding} from "../../partials/Padding/storyArgType";
import {maxWidth} from "../../partials/MaxWidth/storyArgType";
import {BackgroundType} from "../../../dist";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Container> = {
    title: 'Components/Layout/Container',
    component: Container,
    tags: ['autodocs'],
    argTypes: {
        backgroundType,
        maxWidth,
        padding,
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<ContainerProps>): Story => {
    return {
        args: {
            children: 'My content',
            backgroundType: BackgroundType.Azure,
            padding: Padding.Sm,
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic_Container: Story = getStory({});
