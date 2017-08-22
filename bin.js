#! /usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

const check = require('./main');

let imageFile, result;

program
  .version('1.0.0')
  .arguments('<file>')
  .action(function (file) {
  	imageFile = file;
  })
  .parse(process.argv);

result = check(imageFile).ext.toUpperCase();
console.log(`
  ${chalk.bold('type:')} ${result}
`);