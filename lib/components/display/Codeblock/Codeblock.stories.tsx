import type {Meta, StoryObj} from 'storybook-solidjs';
import Codeblock, {CodeblockProps} from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Codeblock> = {
    title: 'Components/Display/Codeblock',
    component: Codeblock,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (props: Partial<CodeblockProps>): Story => {
    return {
        args: {
            code: `<div class="mockup-code">
    <pre data-prefix="1"><code>npm i daisyui</code></pre>
    <pre data-prefix="2"><code>installing...</code></pre>
    <pre data-prefix="3"><code>Error!</code></pre>
</div>`,
            ...props
        }
    }
}


export const Basic: Story = getStory({});
