import type {Meta, StoryObj} from 'storybook-solidjs';

import {Paneling, PanelingProps} from "./index";
import {backgroundType} from "../../partials/Background/storyArgType";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Paneling> = {
    title: 'Components/Layout/Paneling',
    component: Paneling,
    tags: ['autodocs'],
    argTypes: {
        backgroundType,
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<PanelingProps>): Story => {
    return {
        args: {
            children: [
                {
                    label: 'Home',
                    children: <div>Hello, this is the home tab</div>
                },
                {
                    label: 'Results',
                    children: <div>These are your results</div>
                },
                {
                    label: 'Options',
                    children: <div>How would you like to alter the content</div>
                },
                {
                    label: 'Extra',
                    children: <div>extra stuff for you</div>
                }
            ],
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic: Story = getStory({});
