const fs = require('fs');
fs.writeFile('./app.txt','这是一个测试脚本',{
    flag:'w',
    encoding:'utf-8'
},function(){

});
console.log(111);