// 询问用户的设置
const inquirer = require('inquirer');

module.exports = function(name, callback){
  inquirer.prompt([
    {
      type: 'input',
      message: '项目名称:',
      name: 'name',
      default: name
    }, {
      type: 'input',
      message: '项目描述: ',
      name: 'description'
    }, {
      type: 'input',
      message: '作者: ',
      name: 'author'
    }, {
      type: 'input',
      message: '版本号: ',
      name: 'version',
      default: '1.0.0'
    }, {
      type: 'confirm',
      message: '是否安装vuex',
      name: 'vuex',
      default: false
    }
  ]).then(answers => {
    // answers 是询问用户的信息
    console.log(answers);
    callback(answers)
  })
}
