import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const heading = React.createElement('h1', { id: 'heading', xyz: 'abc'}, 'Hello  World from React!');
const heading2 = React.createElement('h2', {}, 'h2 tag');
const child = React.createElement('div', { id: 'child' }, [heading, heading2]);
const child2 = React.createElement('div', { id: 'child2' }, [heading, heading2]);
const parent = React.createElement('div', { id: 'parent' }, [child, child2]);
root.render(parent); 