"use strict";
exports.__esModule = true;
var EventListener_1 = require("./EventListener");
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.start = function () {
        var eventListener = new EventListener_1.EventListener();
        var button = document.getElementById('deleteAllDoneTask');
        if (!button)
            return;
        eventListener.add('sample', 'click', button, function () { return alert('clicked'); });
        eventListener.remove('sample');
    };
    return Application;
}());
window.addEventListener('load', function () {
    var app = new Application();
    app.start();
});
