"use strict";
exports.__esModule = true;
exports.fileArr = void 0;
var File_1 = require("../File");
var exp_1 = require("./exp");
var projects_1 = require("./projects");
var animals_1 = require("./animals");
var homeArray = [];
var file1 = new File_1.File("experience", "directory", "/", undefined, exp_1["default"]);
var file2 = new File_1.File("projects", "directory", "/", undefined, projects_1["default"]);
var file3 = new File_1.File("animals", "directory", "/", undefined, animals_1["default"]);
homeArray[0] = file1;
homeArray[1] = file2;
homeArray[2] = file3;
exports.fileArr = homeArray.map(function (file) {
    return file.getName();
});
exports["default"] = homeArray;
