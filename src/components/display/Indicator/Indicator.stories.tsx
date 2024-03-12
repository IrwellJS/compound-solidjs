import type {Meta, StoryObj} from 'storybook-solidjs';

import Indicator, {IndicatorProps} from './index';
import {AllVariants, Size} from '../../../types';
import {Button} from '../../inputs';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Indicator> = {
    title: 'Components/Display/Indicator',
    component: Indicator,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'The variant styling of the indicator.',
            defaultValue: AllVariants.Primary,
            options: Object.values(AllVariants),
            mapping: AllVariants,
            control: {
                type: 'select',
            },
        },
        size: {
            description: 'The size styling of the indicator.',
            defaultValue: Size.Md,
            options: Object.values(Size),
            mapping: Size,
            control: {
                type: 'select',
            },
        },
        children: {
            description: 'The content to display in the indicator.',
            control: {
                type: 'text',
            },
            table: {
                defaultValue: {summary: 'content', detail: 'dfgdfd'},
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<IndicatorProps>): Story => {
    return {
        args: {
            children: 'content 2',
            label: '8',
            variant: AllVariants.Primary,
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic_Indicator: Story = getStory({
    children: <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
});

export const Basic_Button: Story = getStory({children: <Button>Click me</Button>});
