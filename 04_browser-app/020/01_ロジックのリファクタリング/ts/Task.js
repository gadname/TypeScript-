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
        this.id = properties.id || uuid_1.v4();
        this.title = properties.title;
        this.status = properties.status || exports.statusMap.todo;
    }
    Task.prototype.update = function (properties) {
        this.title = properties.title || this.title;
        this.status = properties.status || this.status;
    };
    Task.validate = function (value) {
        if (!value)
            return false;
        if (!uuid_1.validate(value.id))
            return false;
        if (!value.title)
            return false;
        if (!Object.values(exports.statusMap).includes(value.status))
            return false;
        return true;
    };
    return Task;
}());
exports.Task = Task;
