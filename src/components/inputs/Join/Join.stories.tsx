import type {Meta, StoryObj} from 'storybook-solidjs';
import Join from './index';
import {Orientation, Variant} from '../../../types';
import {Button} from '../';
import Field from '../Field';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Join> = {
    title: 'Components/Inputs/Join',
    component: Join,
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            description: 'The variant styling of the field',
            defaultValue: Orientation.Horizontal,
            options: Object.values(Orientation),
            mapping: Orientation,
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
        children: (
            <>
                <Button isJoinChild={true}>Join</Button>
                <Button isJoinChild={true} variant={Variant.Secondary}>Join</Button>
                <Field isJoinChild={true} placeholder="Join" />
            </>
        ),
    },
}
