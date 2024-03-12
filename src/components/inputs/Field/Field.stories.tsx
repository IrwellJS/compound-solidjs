import type {Meta, StoryObj} from 'storybook-solidjs';
import Field from './index';
import {NoteVariant, Size} from '../../../types';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Field> = {
    title: 'Components/Inputs/Field',
    component: Field,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'The variant styling of the field',
            defaultValue: NoteVariant.Info,
            options: Object.values(NoteVariant),
            mapping: NoteVariant,
            control: {
                type: 'select',
            },
        },
        size: {
            description: 'The size of the field',
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

export const Default: Story = {
    args: {
        label: 'Label',
        labelExtra: 'Label Extra',
        placeholder: 'Placeholder',
        disabled: false,
    },
}
