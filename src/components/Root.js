const React = require('react');


module.exports = class Root extends React.Component {
  render() {
    return React.createElement('div', { className: 'root' }, ...[
      React.createElement('p', {}, 'Root Component'),
      React.createElement('div', {
        className: 'hagure_metal-image',
        style: { width: 300, height: 300 },
      }, '')
    ]);
  }
};
