/*
 * @Author: @fangzhiyu
 * @Descripttion: 文件描述
 * @Date: 2021-06-02 17:27:59
 * @LastEditors: @fangzhiyu
 * @LastEditTime: 2021-06-02 20:14:17
 * @FilePath: \van\bin\download.js
 */
// 从git上下载资源
const download = require('download-git-repo');
const ora = require('ora');
const path = require('path');
const chalk = require('chalk');
const renderFile = require('./renderFile');

const spinner = ora('开始下载资源...')

// 暴露出一个下载方法
module.exports = function(options, name){
  // 下载资源的文件夹
  const dir = path.join(process.cwd(), name);
  /**
   * 这边要检查一下目录下是否次文件夹, 
   * 如果没有的话可以直接拉模板
   * 如果有的话, 需要用户确认覆盖或者直接返回
   */
  spinner.start();
  setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = '资源下载中...'
  }, 500)
  // 从git上下载资源
  download(
    'github:Yvan2415/webpack-demo',
    dir,
    { clone: false },
    function(err){
      if(err){
        spinner.fail(chalk.red('资源下载失败'))
        throw err;
      }
      spinner.succeed(chalk.green('资源下载成功'));
      // 到这一步已经可以下载模板了,后面我们用模板引擎重新渲染一下就可以了
      renderFile(options, name);
    }
  )  
}


