"use strict";
exports.__esModule = true;
exports.TaskCollection = void 0;
var TaskCollection = /** @class */ (function () {
    function TaskCollection() {
        this.tasks = [];
    }
    TaskCollection.prototype.add = function (task) {
        this.tasks.push(task);
    };
    return TaskCollection;
}());
exports.TaskCollection = TaskCollection;
