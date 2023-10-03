import type { Meta, StoryObj } from 'storybook-solidjs';
import { AppBar } from './index';

const meta: Meta<typeof AppBar> = {
  title: 'Example/Header',
  component: AppBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/solid/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/solid/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
