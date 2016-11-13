const React = require('react');
const ReactDOM = require('react-dom');

const Root = require('./components/Root');


window.document.addEventListener('DOMContentLoaded', () => {
  const container = window.document.querySelector('.js-app-container');
  ReactDOM.render(React.createElement(Root), container);
});
