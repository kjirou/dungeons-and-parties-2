const React = require('react');

const dom = React.createElement;


module.exports = class Root extends React.Component {
  render() {
    return dom('div', { className: 'root' }, ...[
      dom('div', {
        className: 'hagure_metal-image',
        style: { width: 300, height: 300 },
      })
    ]);
  }
};
