"use strict";
exports.__esModule = true;
exports.RecursiveFindDirectory = exports.printDir = void 0;
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
var retArray = [];
//to recursively search for a given directory 
//Depriciated: use getRequiredArray from ./fileInsert.ts
function RecursiveFindDirectory(location, arr) {
    if (arr === null)
        return null;
    /*     console.log("!! !! !! searching for directory loc", location);
     */
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].getLocation() !== location) {
            if (arr[i].getType() === 'directory') {
                RecursiveFindDirectory(location, arr[i].getFiles());
            }
        }
        else {
            if (arr[i].getLocation() === location)
                retArray.push(arr[i]);
        }
    }
    return retArray;
}
exports.RecursiveFindDirectory = RecursiveFindDirectory;
