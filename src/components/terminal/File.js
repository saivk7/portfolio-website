"use strict";
exports.__esModule = true;
exports.File = void 0;
var File = /** @class */ (function () {
    function File(name, type, location, data, files) {
        this.name = name;
        this.type = type;
        this.location = location;
        this.data = data;
        if (type === 'directory') {
            this.files = files;
        }
    }
    File.prototype.getName = function () {
        return this.name;
    };
    File.prototype.setName = function (newName) {
        this.name = newName;
    };
    File.prototype.getType = function () {
        return this.type;
    };
    File.prototype.getLocation = function () {
        return this.location;
    };
    File.prototype.getData = function () {
        return this.data || '';
    };
    File.prototype.getFiles = function () {
        if (this.type === 'directory') {
            return this.files || null;
        }
        return null;
    };
    return File;
}());
exports.File = File;
