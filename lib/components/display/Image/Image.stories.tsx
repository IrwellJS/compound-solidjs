import type {Meta, StoryObj} from 'storybook-solidjs';
import {Image, ImageProps} from "./";
import {AspectRatio, Variant} from "../../../types";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Image> = {
    title: 'Components/Display/Image',
    component: Image,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'The variant styling.',
            defaultValue: Variant.Basic,
            options: Object.values(Variant),
            mapping: Variant,
            control: {
                type: 'select',
            },
        },
        aspectRatio: {
            description: 'Define the aspect ratio of the image. Defaults to 16:9.',
            defaultValue: AspectRatio.HighDefinition,
            options: Object.values(AspectRatio),
            mapping: AspectRatio,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<ImageProps>): Story => {
    return {
        args: {
            src: 'https://via.placeholder.com/150',
            alt: 'Placeholder image',
            ...props
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Basic_Indicator: Story = getStory({
});

export const Basic: Story = getStory({});