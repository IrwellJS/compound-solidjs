import {Component, createEffect, createSignal} from "solid-js";
import {Shape, Size, Variant} from "../../../types";
import {Button} from "../../inputs";
import {ChevronLeftIcon, ChevronRightIcon} from "../../icons";

import './styles.css';

export interface CarouselProps {
    title: string;
}

export const Carousel: Component<CarouselProps> = (props) => {
    const [numberOfSlides, setNumberOfSlides] = createSignal(0);
    const [slideWidth, setSlideWidth] = createSignal(30);
    const [itemsPerView, setItemsPerView] = createSignal(3);
    const [currentSlideIndex, setCurrentSlideIndex] = createSignal(0);
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
        carouselContainer.style.transform = `translateX(calc(-${currentSlideIndex() * slideWidth()}% - ${currentSlideIndex() * 20}px))`;
    }

    createEffect(() => {
        setNumberOfSlides(carouselContainer.querySelectorAll('.slide').length);
        updateSlidePosition();
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
        <div class="slide">
            <h3 class="title">{props.title}</h3>
            <div class="content">
                {props.description}
            </div>
            <div class="slide-footer">
                <Button variant={Variant.Primary} size={Size.Sm}>Play Now</Button>
            </div>
        </div>
    );
}
