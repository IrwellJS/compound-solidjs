import type {Meta, StoryObj} from 'storybook-solidjs';
import {Carousel, CarouselProps} from "./index";
import React from "react";
import {Button} from "../../inputs";
import {Fit, GradientBackground, Size, Variant} from "../../../types";
import {Ticket} from "../Ticket";
import {Container} from "../../../layouts";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Carousel> = {
    title: 'Components/Display/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Container backgroundType={GradientBackground.Azure}>
                <Story />
            </Container>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<CarouselProps>): Story => {
    return {
        args: {
            title: 'My Carousel',
            children: [
                <Ticket
                    header="Infinite Wordle"
                    content="Guess the five letter word. Play as many rounds as you like."
                    footer={<Button variant={Variant.Secondary} fit={Fit.Block} size={Size.Sm} onClick={() => {}}>Play Now</Button>}
                />,
                <Ticket
                    content="sdf"
                    footer={<Button variant={Variant.Primary} fit={Fit.Block} size={Size.Sm} onClick={() => {}}>Play Now</Button>}
                />
            ],
            ...props
        }
    }
}

export const Basic: Story = getStory({});
