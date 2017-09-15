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

result = check(imageFile);
if (result && result.ext) {
  console.log(`
    ${chalk.bold('type:')} ${result.ext.toUpperCase()}
  `);
}
else {
  console.log(`
    ${chalk.yellow('The file is probably not an image... Could not determine image type!')}
  `);
}