import type { Component } from 'solid-js';
import {Button} from './components';

const App: Component = () => {
  return (
      <>
        <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
        <Button>Click me</Button>
      </>
  );
};

export default App;
