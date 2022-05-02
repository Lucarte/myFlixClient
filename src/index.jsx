import React from 'react';
import { CreateRoot } from 'react-dom';
import { createRoot } from 'react-dom/cjs/react-dom.production.min';
import { MainView } from './components/main-view/main-view';
import { MovieView } from './components/movie-view/movie-view';
import { MovieCard } from './movie-card/movie-card';

// Import statement to indicate that you need to bundle ´./index.scss´;
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

// Find the root of you app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
createRoot(container).render(React.createElement(MyFlixApplication));