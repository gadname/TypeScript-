"use strict";
exports.__esModule = true;
exports.EventListener = void 0;
var EventListener = /** @class */ (function () {
    function EventListener() {
        this.listeners = {};
    }
    EventListener.prototype.add = function (listenerId, event, element, handler) {
        this.listeners[listenerId] = {
            event: event,
            element: element,
            handler: handler
        };
        element.addEventListener(event, handler);
    };
    return EventListener;
}());
exports.EventListener = EventListener;
