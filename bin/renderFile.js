const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

module.exports = function(options, name){
  // 这是创建的项目的路径
  const dir = path.join(process.cwd(), name);
  
  // 修改package.json模板
  ejs.renderFile(path.join(dir, 'package.json'), options, function(err, result){
    if(err) throw err;
    fs.writeFileSync(path.join(dir, 'package.json'), result);
  })

}