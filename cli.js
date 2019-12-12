#!/usr/bin/env node
'use strict';
const meow = require('meow');
const gradient = require('gradient-string');
const merryChristmas = require('merry-christmas');

const christmasGradient = gradient('red', 'white', 'green');

const cli = meow(`
	Usage
    $ merry-christmas <options>

	Examples
    $ marry-christmas
	  May you have a Christmas that is more special than it has ever been. May Baby Jesus bless you abundantly.
	  
	  $ marry-christmas --all
	  Let’s celebrate this blissful New Year. Happy Christmas.
	  During this time of faith and family, may the true meaning of Christmas fill you with joy.
	  Wishing you a Merry Christmas and a blessed New Year.
	  ...
	  
	Options
	  --all  Get a list of all christmas greetings
`);

console.log(christmasGradient(cli.flags.all ? merryChristmas.all.join('\n') : merryChristmas.random()));
