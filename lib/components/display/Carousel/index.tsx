import {Component, createEffect, createSignal, onCleanup, onMount} from "solid-js";
import {Fit, Shape, Size, Variant} from "../../../types";
import {Button} from "../../inputs";
import {ChevronLeftIcon, ChevronRightIcon} from "../../icons";
import {Card} from "../Card";

import './styles.css';
import {createBreakpoints} from "@solid-primitives/media";
import {TouchEvent, TouchEventHandler} from "react";

export interface CarouselProps {
    title: string;
}

const breakpoints = {
    sm: "640px",
    md: "1024px",
};

export const Carousel: Component<CarouselProps> = (props) => {
    const [numberOfSlides, setNumberOfSlides] = createSignal(0);
    const [slideWidth, setSlideWidth] = createSignal(42);
    const [itemsPerView, setItemsPerView] = createSignal(3);
    const [currentSlideIndex, setCurrentSlideIndex] = createSignal(0);
    const [adjustment, setAdjustment] = createSignal(0);

    const matches = createBreakpoints(breakpoints, {
        mediaFeature: 'min-width',
    });

    function nextSlide() {
        const nextIndex = (currentSlideIndex() + 1) % numberOfSlides();
        setCurrentSlideIndex(nextIndex);
    }

    function previousSlide() {
        const prevIndex = (currentSlideIndex() - 1 + numberOfSlides()) % numberOfSlides();
        setCurrentSlideIndex(prevIndex);
    }

    let carouselContainer!: HTMLDivElement;
    function updateSlidePosition() {
        carouselContainer.style.transform = `translateX(calc(-${currentSlideIndex() * slideWidth()}% - ${currentSlideIndex() * 24}px + ${adjustment()}px))`;
    }

    createEffect(() => {
        setNumberOfSlides(carouselContainer.getElementsByTagName('div').length);

        if (matches.md) {
            setSlideWidth(30);
        } else if(matches.sm) {
            setSlideWidth(42);
        } else {
            setSlideWidth(85);
        }

        updateSlidePosition();
    });

    const [touchStartX, setTouchStartX] = createSignal(0);

    const touchStart: TouchEventHandler = (ev: TouchEvent) => {
        setTouchStartX(ev.touches[0].clientX);
    }
    const touchMove = (e: TouchEvent) => {
        setAdjustment(e.touches[0].clientX - touchStartX());
    }
    const touchEnd = (e: TouchEvent) => {
        setAdjustment(e.touches[0].clientX - touchStartX());
    }

    onMount(() => {
        carouselContainer.addEventListener('touchstart', touchStart as unknown as EventListener);
        carouselContainer.addEventListener('touchmove', touchMove as unknown as EventListener);
        carouselContainer.addEventListener('touchend', touchEnd as unknown as EventListener);
    });
    onCleanup(() => {
        removeEventListener('touchstart', touchStart as unknown as EventListener);
        removeEventListener('touchmove', touchMove as unknown as EventListener);
        removeEventListener('touchend', touchEnd as unknown as EventListener);
    });

    return <div class="slider">
        <div class="header">
            <h2 class="title">{props.title}</h2>
            <div class="controls">
                <Button
                    shape={Shape.Circle}
                    disabled={currentSlideIndex() === 0}
                    size={Size.Sm}
                    onClick={() => previousSlide()}
                ><ChevronLeftIcon/></Button>
                <Button
                    shape={Shape.Circle}
                    disabled={currentSlideIndex() === numberOfSlides() - itemsPerView()}
                    size={Size.Sm}
                    onClick={() => nextSlide()}
                ><ChevronRightIcon/></Button>
            </div>
        </div>
        <div class="show" ref={carouselContainer}>
            <CarouselItem title="Infinite Wordle" description="Guess the five letter word. Play as many rounds as you like."/>
            <CarouselItem title="one" description="some item"/>
            <CarouselItem title="one" description="some item"/>
            <CarouselItem title="one" description="some item"/>
            <CarouselItem title="one" description="some item"/>
            <CarouselItem title="one" description="some item"/>
        </div>
    </div>;
}

export interface CarouselItemProps {
    title: string;
    description: string;
}

export const CarouselItem: Component<CarouselItemProps> = (props) => {
    return (
        <Card
            heading={props.title}
            content={props.description}
            footer={<Button variant={Variant.Primary} fit={Fit.Block} size={Size.Sm}>Play Now</Button>}
        />
    );
}
