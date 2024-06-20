import type {Meta, StoryObj} from 'storybook-solidjs';
import {Carousel, CarouselProps} from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Carousel> = {
    title: 'Components/Display/Carousel',
    component: Carousel,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<CarouselProps>): Story => {
    return {
        args: {
            title: 'My Carousel',
            ...props
        }
    }
}


export const Basic: Story = getStory({});
