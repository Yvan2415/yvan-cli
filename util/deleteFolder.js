/*
 * @Author: @fangzhiyu
 * @Descripttion: 用来删除一个文件夹
 * @Date: 2021-06-02 16:10:01
 * @LastEditors: @fangzhiyu
 * @LastEditTime: 2021-06-02 16:15:09
 * @FilePath: \计划c:\Users\fangzhiyu\Desktop\web\yvan-van\util\deleteFolder.js
 */

const fs = require('fs');

function deleteFolder(url) {
  var files = [];
  if (fs.existsSync(url)) {
    // 返回文件和子目录的数组
    files = fs.readdirSync(url);
    files.forEach(function (file, index) {
      var curPath = path.join(url, file);
      // 如果它还是一个文件夹
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolder(curPath);
      } else {
        // 如果是一个文件, 直接删除
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(url);
  } else {
    console.log("给定的路径不存在，请给出正确的路径");
  }
}

module.exports = {
  deleteFolder
}