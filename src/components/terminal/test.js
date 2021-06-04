"use strict";
exports.__esModule = true;
exports.retarr = exports.printDir = void 0;
var fileUtils_1 = require("./utils/fileUtils");
var info_1 = require("./info");
/* console.log(homeArray);

for(var i=0;i<homeArray.length;i++){
    console.log(homeArray[i]);
} */
function printDir(arr, type) {
    var retarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].getType() === type) {
            retarr.push(arr[i].getName());
        }
    }
    return retarr;
}
exports.printDir = printDir;
exports.retarr = [];
function RecursiveFind(location, arr) {
    if (arr === null)
        return;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].getLocation() !== location) {
            if (arr[i].getType() === 'directory') {
                RecursiveFind(location, arr[i].getFiles());
            }
        }
        else {
            exports.retarr.push(arr[i]);
        }
    }
}
var retArray = fileUtils_1.RecursiveFindDirectory("/experience", info_1["default"]);
console.log("files : ", retArray);
console.log("files in dir", printDir(retArray, "file"));
console.log("directoies in dir, ", printDir(retArray, "directory"));
