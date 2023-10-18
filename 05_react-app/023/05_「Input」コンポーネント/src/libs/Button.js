"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Button = void 0;
var styled_components_1 = require("styled-components");
var constants_1 = require("./constants");
var Button = function (_a) {
    var title = _a.title, onClick = _a.onClick, _b = _a.width, width = _b === void 0 ? 80 : _b, _c = _a.type, type = _c === void 0 ? 'primary' : _c;
    return (<Wrapper onClick={onClick} width={width} className={type}>
      {title}
    </Wrapper>);
};
exports.Button = Button;
var Wrapper = styled_components_1["default"].button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", ";\n  border-radius: ", ";\n  border: solid 1px ", ";\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  cursor: pointer;\n  box-sizing: border-box;\n  ", "\n  &.secondary {\n    border: solid 1px ", ";\n    background: ", ";\n    color: ", ";\n  }\n  &.error {\n    border: none;\n    background: ", ";\n    color: ", ";\n  }\n"], ["\n  padding: ", ";\n  border-radius: ", ";\n  border: solid 1px ", ";\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  cursor: pointer;\n  box-sizing: border-box;\n  ", "\n  &.secondary {\n    border: solid 1px ", ";\n    background: ", ";\n    color: ", ";\n  }\n  &.error {\n    border: none;\n    background: ", ";\n    color: ", ";\n  }\n"])), constants_1.space.m, constants_1.radius.m, constants_1.color.green, constants_1.color.green, constants_1.color.white, function (props) {
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      width: ", "px;\n    "], ["\n      width: ", "px;\n    "])), props.width);
}, constants_1.color.gray, constants_1.color.white, constants_1.color.black, constants_1.color.red, constants_1.color.white);
var templateObject_1, templateObject_2;
