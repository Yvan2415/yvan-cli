#!/usr/bin/env node

const log = require('../util/log')
const { program } = require('commander')
const getInquirer = require('./getInquirer')
const download = require('./download')

// 显示加脚手架的版本
program
  .version('0.0.1', '-v, --version')

// 命令: 创建项目
program
  .command('create <name>')
  .alias('init')
  .description('用于创建项目')
  .action((name) => {
    log.info(name);
    getInquirer(name, (answers) => {
      log.info('开启从git上下载资源');
      download(answers, name);
    });
  })

// 解析命令
program.parse(process.argv)