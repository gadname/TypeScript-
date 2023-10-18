"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.PasswordForm = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var constants_1 = require("./constants");
var Button_1 = require("./Button");
var Input_1 = require("./Input");
var PasswordForm = function (_a) {
    var onSubmit = _a.onSubmit;
    var _b = react_1.useState(''), value = _b[0], setValue = _b[1];
    var handleChange = function (event) {
        setValue(event.currentTarget.value);
    };
    var handleKeyDown = react_1.useCallback(function (e) {
        if (e.key === 'Enter') {
            onSubmit(value);
        }
    }, [value]);
    react_1.useEffect(function () {
        document.addEventListener('keydown', handleKeyDown);
        return function () { return document.removeEventListener('keydown', handleKeyDown); };
    }, [handleKeyDown]);
    return (<Wrapper>
      <Label htmlFor="password">Password:</Label>
      <InputForm id="password" type="password" onChange={function (e) { return handleChange(e); }} error={value.length < 8}/>
      <Button_1.Button onClick={function () { return onSubmit(value); }} title="実行" type="primary"/>
    </Wrapper>);
};
exports.PasswordForm = PasswordForm;
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var Label = styled_components_1["default"].label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0 ", " 0 0;\n  font-size: ", ";\n  line-height: 42px;\n"], ["\n  margin: 0 ", " 0 0;\n  font-size: ", ";\n  line-height: 42px;\n"])), constants_1.space.m, constants_1.fontSize.m);
var InputForm = styled_components_1["default"](Input_1.Input)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: ", ";\n"], ["\n  margin-right: ", ";\n"])), constants_1.space.m);
var templateObject_1, templateObject_2, templateObject_3;
