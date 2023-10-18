"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Input = void 0;
var styled_components_1 = require("styled-components");
var constants_1 = require("./constants");
var Input = function (_a) {
    var type = _a.type, value = _a.value, onChange = _a.onChange, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.error, error = _c === void 0 ? false : _c, props = __rest(_a, ["type", "value", "onChange", "className", "error"]);
    return (<Wrapper type={type} className={className + " " + (error ? 'error' : '')} value={value} onChange={onChange} {...props}/>);
};
exports.Input = Input;
var Wrapper = styled_components_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 42px;\n  padding: ", ";\n  border-radius: ", ";\n  border: solid 1px ", ";\n  font-size: ", ";\n  box-sizing: border-box;\n  &.error {\n    color: ", ";\n    border: solid 1px ", ";\n  }\n"], ["\n  height: 42px;\n  padding: ", ";\n  border-radius: ", ";\n  border: solid 1px ", ";\n  font-size: ", ";\n  box-sizing: border-box;\n  &.error {\n    color: ", ";\n    border: solid 1px ", ";\n  }\n"])), constants_1.space.m, constants_1.radius.m, constants_1.color.gray, constants_1.fontSize.m, constants_1.color.red, constants_1.color.red);
var templateObject_1;
