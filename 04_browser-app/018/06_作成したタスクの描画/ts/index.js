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
        this.taskRenderer = new TaskRenderer_1.TaskRenderer(document.getElementById('todoList'));
        this.handleSubmit = function (e) {
            e.preventDefault();
            var titleInput = document.getElementById('title');
            if (!titleInput.value)
                return;
            var task = new Task_1.Task({ title: titleInput.value });
            _this.taskCollection.add(task);
            _this.taskRenderer.append(task);
            titleInput.value = '';
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
