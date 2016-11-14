const React = require('react');

const dom = React.createElement;


module.exports = class Root extends React.Component {
  render() {
    return dom('div', { className: 'root' }, ...[
      dom('div', {
        className: 'fighter-icon',
        style: { width: 32, height: 32 },
      })
    ]);
  }
};
