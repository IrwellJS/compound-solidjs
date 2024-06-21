import type { Meta, StoryObj } from 'storybook-solidjs';
import { AppBar } from './index';

const meta: Meta<typeof AppBar> = {
  title: 'Widgets/AppBar',
  component: AppBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/solid/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    viewport: {
      viewports: {
        height: '100px',
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    logo: {
      label: 'EcoEcom'
    },
  },
};

export const LoggedOut: Story = {};
