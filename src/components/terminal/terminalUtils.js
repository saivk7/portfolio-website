"use strict";
exports.__esModule = true;
exports.getChangedDirectoryName = exports.getDirectoryName = exports.isValidDirectory = void 0;
var info_1 = require("./info");
var fileInsert_1 = require("./utils/fileInsert");
function isValidDirectory(workingDir, dirName) {
    var dir = getDirectoryName(workingDir, dirName);
    var arr = fileInsert_1.getRequiredArray(dir, info_1["default"], 0);
    console.log("checking", dir, "from termial utils , isValidDir function: ", arr);
    if (arr) {
        return true;
    }
    return false;
}
exports.isValidDirectory = isValidDirectory;
//returns a proper dict name 
function getDirectoryName(workingDir, dirName) {
    var re = /[^a-zA-Z0-9]*/;
    //deal with ../../ cases later
    var replaced = dirName.replace(re, "");
    console.log("replaced is ", replaced);
    return replaced;
}
exports.getDirectoryName = getDirectoryName;
function getChangedDirectoryName(dir) {
    return "";
}
exports.getChangedDirectoryName = getChangedDirectoryName;

/* var str = "../home";
console.log('test',str);
console.log(getDirectoryName("", str));
 */