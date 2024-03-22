import type {Meta, StoryObj} from 'storybook-solidjs';

import {Badge, BadgeProps} from './index';
import {Size, AllVariants} from '../../../types';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Badge> = {
    title: 'Components/Display/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'The variant styling of the badge.',
            defaultValue: AllVariants.Primary,
            options: Object.values(AllVariants),
            mapping: AllVariants,
            control: {
                type: 'select',
            },
        },
        size: {
            description: 'The size styling of the badge.',
            defaultValue: Size.Md,
            options: Object.values(Size),
            mapping: Size,
            control: {
                type: 'select',
            },
        },
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<BadgeProps>): Story => {
    return {
        args: {
            children: 'my badge',
            variant: AllVariants.Primary,
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic_Badge: Story = getStory({});
