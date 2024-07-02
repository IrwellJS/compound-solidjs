import type {Meta, StoryObj} from 'storybook-solidjs';
import {Carousel, CarouselProps} from "./index";
import React from "react";
import {OneActionCard} from "../Card";

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
            children: [
                <OneActionCard title="Infinite Wordle" description="Guess the five letter word. Play as many rounds as you like."  actionLabel="Play Now" actionClick={() => {}}/>,
                <OneActionCard title="one" description="some item 1" actionLabel="click 1" actionClick={() => {}}/>,
                <OneActionCard title="one" description="some item 2" actionLabel="click 1" actionClick={() => {}}/>,
                <OneActionCard title="one" description="some item 3" actionLabel="click 1" actionClick={() => {}}/>,
                <OneActionCard title="one" description="some item 4" actionLabel="click 1" actionClick={() => {}}/>,
            ],
            ...props
        }
    }
}

export const Basic: Story = getStory({});
