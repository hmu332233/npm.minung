"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var ink_1 = require("ink");
var useTypingEffect_1 = __importDefault(require("./useTypingEffect"));
function Minung() {
    var _a = (0, useTypingEffect_1.default)({
        text: "Hi! I'm Minung!",
    }), firstText = _a.displayText, firstTextEnd = _a.end, setFirstTextPlay = _a.setPlay;
    var _b = (0, useTypingEffect_1.default)({
        text: "I'm working as a software engineer at Goorm.",
    }), secondText = _b.displayText, secondTextEnd = _b.end, setSecondTextPlay = _b.setPlay;
    var _c = (0, useTypingEffect_1.default)({
        text: "Github: https://github.com/hmu332233",
    }), thirdText = _c.displayText, setThirdTextPlay = _c.setPlay;
    (0, react_2.useEffect)(function () {
        setFirstTextPlay(true);
    }, []);
    (0, react_2.useEffect)(function () {
        if (firstTextEnd) {
            setSecondTextPlay(true);
        }
    }, [firstTextEnd]);
    (0, react_2.useEffect)(function () {
        if (secondTextEnd) {
            setThirdTextPlay(true);
        }
    }, [secondTextEnd]);
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column", padding: 2 },
        react_1.default.createElement(ink_1.Text, null,
            firstText,
            react_1.default.createElement(ink_1.Newline, null),
            secondText,
            react_1.default.createElement(ink_1.Newline, null),
            react_1.default.createElement(ink_1.Newline, null),
            thirdText)));
}
;
exports.default = Minung;
