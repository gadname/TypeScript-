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
    TaskCollection.prototype.find = function (id) {
        return this.tasks.find(function (task) { return task.id === id; });
    };
    TaskCollection.prototype.update = function (task) {
        this.tasks = this.tasks.map(function (item) {
            if (item.id === task.id)
                return task;
            return item;
        });
    };
    TaskCollection.prototype.filter = function (filterStatus) {
        return this.tasks.filter(function (_a) {
            var status = _a.status;
            return status === filterStatus;
        });
    };
    return TaskCollection;
}());
exports.TaskCollection = TaskCollection;
