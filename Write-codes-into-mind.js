/*
* getJsonFiles:
* Creat a json file with the contents from a batches of json files in a folder.
*/

var fs = require('fs');

var jsonfile = require('jsonfile');

var pathString = '../Github/words-from-the-heart/';   //还是少了“/”

var writePathString = './all_words.json';

var errorPathString = './error_data.json';


fs.readdir(pathString, function (err, files) {
  if (err) {
    console.log('读取文件成功');
    return;
    // 对于为什么 console.log 后要加 return，而下面的 for 循环后不用 return，还没想明白。                                       
  }

  var jsonFiles = [];
  for (var i = 0; i < files.length; i++) {
    if (files[i].includes('.json')) {  
      // 少打了游标[i]
      jsonFiles.push(files[i]);
    }
  }

  var jsonList = [];
  var errorFiles = [];
  for (var i= 0; i < jsonFiles.length; i++) {
    try {
      var content = jsonfile.readFileSync(pathString + jsonFiles[i]); 
      //不是数组，是一批对象。Q:看下jsonfile文档。
      jsonList.push(content);
    } catch (err) {
      errorFiles.push(jsonFiles[i]);  
      // 在哪里有看到也是用files表示文件名。应该是普遍用法。
    }
  }

  jsonfile.writeFileSync(writePathString,jsonList);
  jsonfile.writeFileSync(errorPathString,errorFiles);

});