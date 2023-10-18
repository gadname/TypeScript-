var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.start = function () {
        console.log('hello world');
    };
    return Application;
}());
window.addEventListener('load', function () {
    var app = new Application();
    app.start();
});
