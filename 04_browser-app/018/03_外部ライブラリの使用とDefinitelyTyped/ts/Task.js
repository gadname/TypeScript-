"use strict";
exports.__esModule = true;
exports.Task = void 0;
var uuid_1 = require("uuid");
var Task = /** @class */ (function () {
    function Task(properties) {
        this.id = uuid_1.v4();
        this.title = properties.title;
    }
    return Task;
}());
exports.Task = Task;
