import type {Meta, StoryObj} from 'storybook-solidjs';

import {Card, CardProps} from './index';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Card> = {
    title: 'Components/Display/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<CardProps>): Story => {
    return {
        args: {
            heading: 'My Heading',
            content: 'The content of the page',
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic_Card: Story = getStory({});
