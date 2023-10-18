"use strict";
exports.__esModule = true;
exports.TaskRenderer = void 0;
var TaskRenderer = /** @class */ (function () {
    function TaskRenderer(todoList) {
        this.todoList = todoList;
    }
    TaskRenderer.prototype.append = function (task) {
        var _a = this.render(task), taskEl = _a.taskEl, deleteButtonEl = _a.deleteButtonEl;
        this.todoList.append(taskEl);
        return { deleteButtonEl: deleteButtonEl };
    };
    TaskRenderer.prototype.remove = function (task) {
        var taskEl = document.getElementById(task.id);
        if (!taskEl)
            return;
        this.todoList.removeChild(taskEl);
    };
    TaskRenderer.prototype.render = function (task) {
        // <div class="taskItem">
        //   <span>タイトル</span>
        //   <button>削除</button>
        // </div>
        var taskEl = document.createElement('div');
        var spanEl = document.createElement('span');
        var deleteButtonEl = document.createElement('button');
        taskEl.id = task.id;
        taskEl.classList.add('task-item');
        spanEl.textContent = task.title;
        deleteButtonEl.textContent = '削除';
        taskEl.append(spanEl, deleteButtonEl);
        return { taskEl: taskEl, deleteButtonEl: deleteButtonEl };
    };
    return TaskRenderer;
}());
exports.TaskRenderer = TaskRenderer;
