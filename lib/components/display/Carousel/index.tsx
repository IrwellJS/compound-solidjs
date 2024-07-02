import {Component, For, JSXElement, mergeProps, onMount} from "solid-js";
import Swiper from "swiper";
import type {SwiperOptions} from "swiper/types/swiper-options";
import { Navigation } from "swiper/modules";
import {ChevronLeftIcon, ChevronRightIcon} from "../../icons";
import {Shape, Size} from "../../../types";
import {Button} from "../../inputs";

import './styles.css';
import "swiper/css";

export interface BreakpointItem {
    pixels: number,
    slidesPerView: number,
}

export interface Breakpoints {
    points: BreakpointItem[];
    defaultSlidesPerView: number,
}

export interface CarouselProps {
    title: string,
    breakpointBase?: 'window' | 'container',
    breakpoints?: Breakpoints,
    children: JSXElement[],
}

const defaultBreakpoints: Breakpoints = {
    points: [
        {
            pixels: 640,
            slidesPerView: 2,
        },
        {
            pixels: 1024,
            slidesPerView: 3,
        },
    ],
    defaultSlidesPerView: 1,
};

export const Carousel: Component<CarouselProps> = (props) => {
    const merged: Required<CarouselProps> = mergeProps({
        breakpoints: defaultBreakpoints,
        breakpointBase: 'window' as 'window',
    }, props);

    let carouselContainer!: HTMLDivElement;
    let prevButton!: HTMLDivElement;
    let nextButton!: HTMLDivElement;

    onMount(() => {
        const options: SwiperOptions = {
            modules: [Navigation],
            slidesPerView: merged.breakpoints.defaultSlidesPerView,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 100,
            slidesPerGroup: 1,
            loop: true,
            loopAdditionalSlides: 1,
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton,
            },
            breakpointsBase: merged.breakpointBase,
        };

        if (merged.breakpoints.points.length != 0) {
            const bp: {[width: number]: SwiperOptions;} = {};
            merged.breakpoints.points.forEach((item: BreakpointItem) => {
                bp[item.pixels] = {
                    slidesPerView: item.slidesPerView,
                }
            });
            options.breakpoints = bp;
        }
        new Swiper(carouselContainer, options);
    });

    return <div class="slider" ref={carouselContainer}>
        <div class="header">
            <h2 class="title">{props.title}</h2>
            <div class="controls">
                <Button
                    ref={prevButton}
                    shape={Shape.Circle}
                    size={Size.Sm}
                    onClick={() => {}}
                ><ChevronLeftIcon/></Button>
                <Button
                    ref={nextButton}
                    shape={Shape.Circle}
                    size={Size.Sm}
                    onClick={() => {}}
                ><ChevronRightIcon/></Button>
            </div>
        </div>
        <div class="swiper-wrapper">
            <For each={merged.children}>
                {(item) => <div class="swiper-slide">{item}</div>}
            </For>
        </div>
    </div>;
}
