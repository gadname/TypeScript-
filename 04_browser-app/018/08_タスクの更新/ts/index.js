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
            _this.eventListener.add(task.id, 'click', deleteButtonEl, function () { return _this.handleClickDeleteTask(task); });
            titleInput.value = '';
        };
        this.handleClickDeleteTask = function (task) {
            if (!window.confirm("\u300C" + task.title + "\u300D\u3092\u524A\u9664\u3057\u3066\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F"))
                return;
            _this.eventListener.remove(task.id);
            _this.taskCollection["delete"](task);
            _this.taskRenderer.remove(task);
        };
    }
    Application.prototype.start = function () {
        var createForm = document.getElementById('createForm');
        this.eventListener.add('submit-handler', 'submit', createForm, this.handleSubmit);
    };
    return Application;
}());
window.addEventListener('load', function () {
    var app = new Application();
    app.start();
});
