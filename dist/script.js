"use strict";

var _Dog2 = _interopRequireDefault(require("./Dog.js"));
var _Cat = _interopRequireDefault(require("./Cat.js"));
var _Rabbit = _interopRequireDefault(require("./Rabbit.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _Dog = new _Dog2["default"](),
  setAge = _Dog.setAge,
  getAge = _Dog.getAge;
setAge(3);
alert(getAge());
new _Dog2["default"]().walk();
new _Cat["default"]().walk();
new _Rabbit["default"]().walk();