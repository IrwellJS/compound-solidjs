import type {Meta, StoryObj} from 'storybook-solidjs';

import {Table, TableProps} from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Table> = {
    title: 'Components/Display/Table',
    component: Table,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<TableProps>): Story => {
    return {
        args: {
            headers: ['', 'Name', 'Job', 'Favorite Color'],
            rows: [
                ['1', 'Cy Ganderton', 'Quality Control Specialist', 'Blue'],
                ['2', 'Lorrie Hays', 'Quality Control Specialist', 'Blue'],
                ['3', 'Lorrie Hays', 'Quality Control Specialist', 'Blue'],
            ],
            ...props
        }
    }
}


export const Basic: Story = getStory({});
