"use strict";
exports.__esModule = true;
var EventListener_1 = require("./EventListener");
var Task_1 = require("./Task");
var Application = /** @class */ (function () {
    function Application() {
        this.eventListener = new EventListener_1.EventListener();
        this.handleSubmit = function (e) {
            e.preventDefault();
            var titleInput = document.getElementById('title');
            if (!titleInput.value)
                return;
            var task = new Task_1.Task({ title: titleInput.value });
            console.log(task);
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
