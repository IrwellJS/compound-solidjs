import { Component, mergeProps, splitProps } from 'solid-js';
import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  children: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: Component<ButtonProps> = (props) => {
  props = mergeProps({ size: 'small' as ButtonProps['size'] }, props);
  const [local, rest] = splitProps(props, [
    'primary',
    'size',
    'backgroundColor',
    'children',
  ]);

  return (
    <button
      {...rest}
      type="button"
      classList={{
        'storybook-button--small': local.size === 'small',
        'storybook-button--medium': local.size === 'medium',
        'storybook-button--large': local.size === 'large',
        'storybook-button': true,
        'storybook-button--primary': local.primary === true,
        'storybook-button--secondary': local.primary === false,
          'outline': true,
          'outline-black': true,
      }}
      style={{ 'background-color': local.backgroundColor }}
    >
      {local.children}
    </button>
  );
};
