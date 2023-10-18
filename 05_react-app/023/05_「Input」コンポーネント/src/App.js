"use strict";
exports.__esModule = true;
exports.App = void 0;
var Text_1 = require("./libs/Text");
var Heading_1 = require("./libs/Heading");
var Button_1 = require("./libs/Button");
var Textarea_1 = require("./libs/Textarea");
var Input_1 = require("./libs/Input");
var App = function () {
    return (<>
      <Text_1.Text text="true"/>
      <Heading_1.Heading tag="h1">見出し</Heading_1.Heading>
      <Heading_1.Heading tag="h1">
        <span>hello, world!</span>
      </Heading_1.Heading>
      <Button_1.Button onClick={function () { return console.log('clicked!'); }} title="Button" type="primary" width={96}/>
      <Button_1.Button onClick={function () { return console.warn('clicked!'); }} title="Button" type="secondary"/>
      <Button_1.Button onClick={function () { return console.error('clicked!'); }} title="Button" type="error"/>
      <Textarea_1.Textarea width={500}/>
      <Textarea_1.Textarea width={200} maxLength={100}/>
      <Input_1.Input type="text"/>
    </>);
};
exports.App = App;
