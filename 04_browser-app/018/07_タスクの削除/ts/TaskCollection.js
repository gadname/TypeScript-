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
    TaskCollection.prototype["delete"] = function (task) {
        this.tasks = this.tasks.filter(function (_a) {
            var id = _a.id;
            return id !== task.id;
        });
    };
    return TaskCollection;
}());
exports.TaskCollection = TaskCollection;
