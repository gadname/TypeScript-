"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Text = void 0;
var styled_components_1 = require("styled-components");
var constants_1 = require("./constants");
var Text = function (_a) {
    var text = _a.text, _b = _a.className, className = _b === void 0 ? '' : _b;
    return <Wrapper className={className}>{text}</Wrapper>;
};
exports.Text = Text;
var Wrapper = styled_components_1["default"].p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), constants_1.fontSize.m);
var templateObject_1;
