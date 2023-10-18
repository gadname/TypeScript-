"use strict";
exports.__esModule = true;
exports.TaskCollection = void 0;
var Task_1 = require("./Task");
var STORAGE_KEY = 'TASKS';
var TaskCollection = /** @class */ (function () {
    function TaskCollection() {
        this.storage = localStorage;
        this.tasks = this.getStoredTasks();
    }
    TaskCollection.prototype.add = function (task) {
        this.tasks.push(task);
        this.updateStorage();
    };
    TaskCollection.prototype["delete"] = function (task) {
        this.tasks = this.tasks.filter(function (_a) {
            var id = _a.id;
            return id !== task.id;
        });
        this.updateStorage();
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
    TaskCollection.prototype.moveAboveTarget = function (task, target) {
        var taskIndex = this.tasks.indexOf(task);
        var targetIndex = this.tasks.indexOf(target);
        this.changeOrder(task, taskIndex, taskIndex < targetIndex ? targetIndex - 1 : targetIndex);
    };
    TaskCollection.prototype.moveToLast = function (task) {
        var taskIndex = this.tasks.indexOf(task);
        this.changeOrder(task, taskIndex, this.tasks.length);
    };
    TaskCollection.prototype.changeOrder = function (task, taskIndex, targetIndex) {
        this.tasks.splice(taskIndex, 1);
        this.tasks.splice(targetIndex, 0, task);
        this.updateStorage();
    };
    TaskCollection.prototype.updateStorage = function () {
        this.storage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
    };
    TaskCollection.prototype.getStoredTasks = function () {
        var jsonString = this.storage.getItem(STORAGE_KEY);
        if (!jsonString)
            return [];
        try {
            var storedTasks = JSON.parse(jsonString);
            assertIsTaskObjects(storedTasks);
            var tasks = storedTasks.map(function (task) { return new Task_1.Task(task); });
            return tasks;
        }
        catch (_a) {
            this.storage.removeItem(STORAGE_KEY);
            return [];
        }
    };
    return TaskCollection;
}());
exports.TaskCollection = TaskCollection;
function assertIsTaskObjects(value) {
    if (!Array.isArray(value) || !value.every(function (item) { return Task_1.Task.validate(item); })) {
        throw new Error('引数「value」は TaskObject[] 型と一致しません。');
    }
}
