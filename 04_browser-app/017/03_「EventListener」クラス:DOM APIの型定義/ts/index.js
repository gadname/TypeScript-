var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.start = function () {
        var button = document.getElementById('deleteAllDoneTask');
        if (!button)
            return;
        console.log(button);
    };
    return Application;
}());
window.addEventListener('load', function () {
    var app = new Application();
    app.start();
});
