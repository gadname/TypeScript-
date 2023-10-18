"use strict";
exports.__esModule = true;
exports.App = void 0;
var Text_1 = require("./libs/Text");
var Heading_1 = require("./libs/Heading");
var App = function () {
    return (<>
      <Text_1.Text text="true"/>
      <Heading_1.Heading tag="h1">見出し</Heading_1.Heading>
      <Heading_1.Heading tag="h1">
        <span>hello, world!</span>
      </Heading_1.Heading>
    </>);
};
exports.App = App;
