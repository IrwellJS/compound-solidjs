import type {Meta, StoryObj} from 'storybook-solidjs';

import {Dropdown, DropdownProps} from './index';
import {Position, Variant} from "../../../types";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Dropdown> = {
    title: 'Components/Inputs/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ 'margin': '100px 200px' }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        ),
    ],
    argTypes: {
        menuPosition: {
            description: 'The position of the menu relative to the button',
            defaultValue: Position.Bottom,
            options: Object.values(Position),
            mapping: Position,
            control: {
                type: 'select',
            },
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<DropdownProps>): Story => {
    return {
        args: {
            children: [
                {
                    label: 'google',
                    action: 'https://www.google.com'
                },
                {
                    label: 'console',
                    action: () => console.log('Item 2 clicked')
                }
            ],
            ...props
        }
    }
}

export const Basic: Story = getStory({});
