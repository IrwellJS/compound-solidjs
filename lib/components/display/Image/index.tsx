import {Component, createSignal, Show} from "solid-js";
import {Spinner} from "../";

import './styles.css';
import {AspectRatio, Variant} from "../../../types";

export enum ImageLoadingStatus {
    Loading = 0,
    Loaded = 1,
    Error = 2,
}

export interface ImageProps {
    src: string;
    alt: string;
    variant: Variant;
    aspectRatio?: AspectRatio;
}

export const Image: Component<ImageProps> = (props) => {
    const [status, setStatus] = createSignal(ImageLoadingStatus.Loading);

    return (
        <div class={`image-loader aspect-ratio-16-9
            image-loader-${props.variant}
            aspect-ratio-${props.aspectRatio || AspectRatio.HighDefinition}
            ${status() == ImageLoadingStatus.Loaded ? 'loaded' : ''}`}
        >
            <img
                src={props.src}
                alt={props.alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setStatus(ImageLoadingStatus.Loaded)}
                onError={() => setStatus(ImageLoadingStatus.Error)}
            />
            <Spinner variant={props.variant} />
            {status() === ImageLoadingStatus.Error && <span>Error loading image</span>}
        </div>
    );
}

export default Image;
