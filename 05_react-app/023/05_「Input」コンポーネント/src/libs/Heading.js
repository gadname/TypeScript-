"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Heading = void 0;
var styled_components_1 = require("styled-components");
var Heading = function (_a) {
    var children = _a.children, tag = _a.tag;
    return (<Wrapper as={tag}>
      {children}
    </Wrapper>);
};
exports.Heading = Heading;
var Wrapper = styled_components_1["default"].h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n"], ["\n  margin: 0;\n"])));
var templateObject_1;
