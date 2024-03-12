import {Component} from 'solid-js';
import './appbar.css';
import {Indicator} from '../../components';
import {AllVariants, Size} from '../../types';

type User = {
  name: string;
};

interface AppBarProps {
  logo: string;
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const AppBar: Component<AppBarProps> = (props) => (
    <div class="navbar bg-base-100 max-w-7xl rounded-box shadow-xl">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">{props.logo}</a>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabIndex="0" role="button" class="btn btn-ghost btn-circle">
            <Indicator label="8" variant={AllVariants.Basic} size={Size.Sm}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </Indicator>
          </div>
          <div tabIndex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <div tabIndex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component"
                   src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
            </div>
          </div>
          <ul tabIndex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
);