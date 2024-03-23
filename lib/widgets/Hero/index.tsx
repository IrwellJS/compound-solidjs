import {Component, Show} from "solid-js";
import {Button, ButtonProps} from "../../components";

export interface HeroProps {
    title: string;
    subtitle: string;
    cta?: ButtonProps;
}

export const Hero: Component<HeroProps> = (props) => {
    return (
        <div class="hero min-h-[30rem] bg-base-200">
            <div class="text-center hero-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">{props.title}</h1>
                    <p class="mb-5">{props.subtitle}</p>
                    <Show when={props.cta !== undefined}><Button {...props.cta} /></Show>
                </div>
            </div>
        </div>
    );
}

export default Hero;
