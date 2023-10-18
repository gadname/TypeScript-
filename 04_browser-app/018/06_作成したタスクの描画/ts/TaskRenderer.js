"use strict";
exports.__esModule = true;
exports.TaskRenderer = void 0;
var TaskRenderer = /** @class */ (function () {
    function TaskRenderer(todoList) {
        this.todoList = todoList;
    }
    TaskRenderer.prototype.append = function (task) {
        var taskEl = this.render(task);
        this.todoList.append(taskEl);
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
        return taskEl;
    };
    return TaskRenderer;
}());
exports.TaskRenderer = TaskRenderer;
