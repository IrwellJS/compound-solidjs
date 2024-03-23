import type {Meta, StoryObj} from 'storybook-solidjs';

import {Hero, HeroProps} from './index';
import {Variant} from "../../types";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Hero> = {
    title: 'Widgets/Hero',
    component: Hero,
    tags: ['autodocs'],
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<HeroProps>): Story => {
    return {
        args: {
            title: 'Welcome to IrwellJS/Compound',
            subtitle: 'The best way to build web apps',
            cta: {
                children: 'Get Started',
                variant: Variant.Primary,
                onClick: () => {
                    alert('Get Started');
                }
            },
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Default: Story = getStory({});
