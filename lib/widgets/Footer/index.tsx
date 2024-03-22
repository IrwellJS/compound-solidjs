import {Component, createSignal, For, Show} from "solid-js";

export interface FooterLogoProps {
    alt?: string;
    text?: string;
    children?: Element;
}

const FooterLogo: Component<FooterLogoProps> = (props: FooterLogoProps) => {
    return (
        <aside>
            {props.children}
            <p>{props.text}</p>
        </aside>
    );
}

export interface FooterProps {
    logo?: FooterLogoProps;
    legal: Array<{
        text: string;
        link: string;
    }>;
}

export const Footer: Component<FooterProps> = (props) => {
    return (
        <footer class="footer p-10 bg-neutral text-neutral-content">
            <Show when={props.logo !== undefined}><FooterLogo {...props.logo} /></Show>
            <nav>
                <h6 class="footer-title">Legal</h6>
                <For each={props.legal}>
                    {(item) => (
                        <a href={item.link}>{item.text}</a>
                    )}
                </For>
            </nav>
        </footer>
    );
}

export default Footer
