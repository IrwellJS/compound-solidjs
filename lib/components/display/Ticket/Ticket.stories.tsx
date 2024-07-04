import type {Meta, StoryObj} from 'storybook-solidjs';

import {Ticket, TicketProps} from './index';
import {BackgroundType} from "../../../types";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Ticket> = {
    title: 'Components/Display/Ticket',
    component: Ticket,
    tags: ['autodocs'],

    argTypes: {
        backgroundType: {
            description: 'The background colour type',
            defaultValue: BackgroundType.Basic,
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

const getStory = (props: Partial<TicketProps>): Story => {
    return {
        args: {
            header: 'My Header',
            content: 'Some content to go here',
            footer: 'My Footer',
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic_Badge: Story = getStory({});
