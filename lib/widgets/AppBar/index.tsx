import {Component} from 'solid-js';

type User = {
  name: string;
};

interface AppBarProps {
  logo: string;
}

export const AppBar: Component<AppBarProps> = (props) => (
    <div class="navbar bg-base-100 max-w-7xl rounded-box shadow-xl">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">{props.logo}</a>
      </div>
      <div class="flex-none">

      </div>
    </div>
);
