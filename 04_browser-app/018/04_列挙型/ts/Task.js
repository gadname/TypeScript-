"use strict";
exports.__esModule = true;
exports.Task = exports.statusMap = void 0;
var uuid_1 = require("uuid");
exports.statusMap = {
    todo: 'TODO',
    doing: 'DOING',
    done: 'DONE'
};
var Task = /** @class */ (function () {
    function Task(properties) {
        this.id = uuid_1.v4();
        this.title = properties.title;
        this.status = exports.statusMap.todo;
    }
    return Task;
}());
exports.Task = Task;
