"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Textarea = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var constants_1 = require("./constants");
var Textarea = function (_a) {
    var maxLength = _a.maxLength, _b = _a.width, width = _b === void 0 ? 300 : _b;
    var _c = react_1.useState(0), count = _c[0], setCount = _c[1];
    var handleChange = function (event) {
        setCount(event.currentTarget.value.length);
    };
    var isError = function () {
        if (maxLength !== undefined && maxLength - count < 0)
            return true;
        return false;
    };
    return (<>
      <Wrapper onChange={handleChange} width={width} className={isError() ? 'error' : ''}/>
      {maxLength !== undefined && (<Count className={isError() ? 'error' : ''}>
          残り{Math.max(maxLength - count, 0)}文字です
        </Count>)}
    </>);
};
exports.Textarea = Textarea;
var Wrapper = styled_components_1["default"].textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 120px;\n  padding: ", ";\n  border-radius: ", ";\n  border: solid 1px ", ";\n  font-size: ", ";\n\n  ", "\n  &.error {\n    border: solid 1px ", ";\n  }\n"], ["\n  height: 120px;\n  padding: ", ";\n  border-radius: ", ";\n  border: solid 1px ", ";\n  font-size: ", ";\n\n  ", "\n  &.error {\n    border: solid 1px ", ";\n  }\n"])), constants_1.space.m, constants_1.radius.m, constants_1.color.gray, constants_1.fontSize.m, function (props) {
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      width: ", "px;\n    "], ["\n      width: ", "px;\n    "])), props.width);
}, constants_1.color.red);
var Count = styled_components_1["default"].p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0;\n  font-size: ", ";\n  &.error {\n    color: ", ";\n  }\n"], ["\n  margin: 0;\n  font-size: ", ";\n  &.error {\n    color: ", ";\n  }\n"])), constants_1.fontSize.m, constants_1.color.red);
var templateObject_1, templateObject_2, templateObject_3;
