#!/usr/bin/env node
var cowsay = require('cowsay');
var chalk  = require('chalk');
var spawn  = require('child_process').spawnSync;
var psname = process.argv[2];

var err    = function(msg){
  console.error(chalk.bold.red(cowsay.say({text:msg})));
  process.exit(1);
};

var p = spawn('pgrep', ['-q', psname]);
if(p.status !== 0){
  err(psname + ' is not running!!!');
}
