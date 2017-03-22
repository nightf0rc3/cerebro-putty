'use strict';

const { shellCommand, memoize } = require('cerebro-tools');
const icon = require('icon.png')

const putty = (name) => {
  shellCommand('putty -load ' + name);
}

const fn = ({term, display, actions}) => {
  let match = term.match(/^putty\s+(.+)/i);
  match = match || term.match(/(.+)\sputty$/i);
  if (match) {
    display({
      icon: icon,
      title: 'Open ' + match[1],
      onSelect: () => putty(match[1])
      });
  }
};

module.exports = {
  name: 'Open saved putty session',
  keyword: 'putty ',
  icon: icon,
  fn
};
