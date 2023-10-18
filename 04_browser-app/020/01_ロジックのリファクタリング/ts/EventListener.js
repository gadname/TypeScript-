"use strict";
exports.__esModule = true;
exports.EventListener = void 0;
var uuid_1 = require("uuid");
var EventListener = /** @class */ (function () {
    function EventListener() {
        this.listeners = {};
    }
    EventListener.prototype.add = function (event, element, handler, listenerId) {
        if (listenerId === void 0) { listenerId = uuid_1.v4(); }
        this.listeners[listenerId] = {
            event: event,
            element: element,
            handler: handler
        };
        element.addEventListener(event, handler);
    };
    EventListener.prototype.remove = function (listenerId) {
        var listener = this.listeners[listenerId];
        if (!listener)
            return;
        listener.element.removeEventListener(listener.event, listener.handler);
        delete this.listeners[listenerId];
    };
    return EventListener;
}());
exports.EventListener = EventListener;
