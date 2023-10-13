import type {Meta, StoryObj} from 'storybook-solidjs';

import {Button, ButtonDefaultProps, ButtonProps} from './index';
import {Fit, Size, Variant} from '../../types';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Button> = {
    title: 'Inputs/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        fit: {
            description: 'How the button should fit the available space',
            defaultValue: Fit.Inline,
            options: Object.values(Fit),
            mapping: Fit,
            control: {
                type: 'select',
            },
        },
        size: {
            description: 'The size of the button',
            defaultValue: Size.Small,
            options: Object.values(Size),
            mapping: Size,
            control: {
                type: 'select',
            },
        },
        variant: {
            description: 'The variant styling of the button',
            defaultValue: Variant.Primary,
            options: Object.values(Variant),
            mapping: Variant,
            control: {
                type: 'select',
            },
        },
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<ButtonProps>): Story => {
    return {
        args: {
            children: 'Button',
            ...ButtonDefaultProps,
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Fit_Inline: Story = getStory({fit: Fit.Inline});
export const Fit_Justify: Story = getStory({fit: Fit.Justify});

export const Size_Small: Story = getStory({size: Size.Small});
export const Size_Medium: Story = getStory({size: Size.Medium});
export const Size_Large: Story = getStory({size: Size.Large});

export const Variant_Primary: Story = getStory({variant: Variant.Primary});
export const Variant_Primary_Disabled: Story = getStory({variant: Variant.Primary, disabled: true});
export const Variant_Secondary: Story = getStory({variant: Variant.Secondary});
export const Variant_Secondary_Disabled: Story = getStory({variant: Variant.Secondary, disabled: true});
