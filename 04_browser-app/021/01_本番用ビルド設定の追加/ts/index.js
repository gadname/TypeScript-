"use strict";
exports.__esModule = true;
var EventListener_1 = require("./EventListener");
var Task_1 = require("./Task");
var TaskCollection_1 = require("./TaskCollection");
var TaskRenderer_1 = require("./TaskRenderer");
var Application = /** @class */ (function () {
    function Application() {
        var _this = this;
        this.eventListener = new EventListener_1.EventListener();
        this.taskCollection = new TaskCollection_1.TaskCollection();
        this.taskRenderer = new TaskRenderer_1.TaskRenderer(document.getElementById('todoList'), document.getElementById('doingList'), document.getElementById('doneList'));
        this.handleSubmit = function (e) {
            e.preventDefault();
            var titleInput = document.getElementById('title');
            if (!titleInput.value)
                return;
            var task = new Task_1.Task({ title: titleInput.value });
            _this.taskCollection.add(task);
            var deleteButtonEl = _this.taskRenderer.append(task).deleteButtonEl;
            _this.eventListener.add('click', deleteButtonEl, function () { return _this.handleClickDeleteTask(task); }, task.id);
            titleInput.value = '';
        };
        this.executeDeleteTask = function (task) {
            _this.eventListener.remove(task.id);
            _this.taskCollection["delete"](task);
            _this.taskRenderer.remove(task);
        };
        this.handleClickDeleteTask = function (task) {
            if (!window.confirm("\u300C" + task.title + "\u300D\u3092\u524A\u9664\u3057\u3066\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F"))
                return;
            _this.executeDeleteTask(task);
        };
        this.handleClickDeleteAllDoneTasks = function () {
            if (!window.confirm('DONE のタスクを一括削除してよろしいですか？'))
                return;
            var doneTasks = _this.taskCollection.filter(Task_1.statusMap.done);
            doneTasks.forEach(function (task) { return _this.executeDeleteTask(task); });
        };
        this.handleDropAndDrop = function (el, sibling, newStatus) {
            var taskId = _this.taskRenderer.getId(el);
            if (!taskId)
                return;
            var task = _this.taskCollection.find(taskId);
            if (!task)
                return;
            task.update({ status: newStatus });
            _this.taskCollection.update(task);
            if (sibling) {
                var nextTaskId = _this.taskRenderer.getId(sibling);
                if (!nextTaskId)
                    return;
                var nextTask = _this.taskCollection.find(nextTaskId);
                if (!nextTask)
                    return;
                _this.taskCollection.moveAboveTarget(task, nextTask);
            }
            else {
                _this.taskCollection.moveToLast(task);
            }
        };
    }
    Application.prototype.start = function () {
        var _this = this;
        var taskItems = this.taskRenderer.renderAll(this.taskCollection);
        var createForm = document.getElementById('createForm');
        var deleteAllDoneTaskButton = document.getElementById('deleteAllDoneTask');
        taskItems.forEach(function (_a) {
            var task = _a.task, deleteButtonEl = _a.deleteButtonEl;
            _this.eventListener.add('click', deleteButtonEl, function () { return _this.handleClickDeleteTask(task); }, task.id);
        });
        this.eventListener.add('submit', createForm, this.handleSubmit);
        this.eventListener.add('click', deleteAllDoneTaskButton, this.handleClickDeleteAllDoneTasks);
        this.taskRenderer.subscribeDragAndDrop(this.handleDropAndDrop);
    };
    return Application;
}());
window.addEventListener('load', function () {
    var app = new Application();
    app.start();
});
