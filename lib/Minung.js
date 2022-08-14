"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var ink_1 = require("ink");
var useTypingEffect_1 = __importDefault(require("./useTypingEffect"));
var TEXTS = [
    "Hi! I'm Minung!",
    "I'm working as a software engineer at Goorm.",
    "",
    "Github: https://github.com/hmu332233",
    "BuyMeACoffe: https://www.buymeacoffee.com/minungHan",
].join('\n');
function Minung() {
    var _a = (0, useTypingEffect_1.default)({
        text: TEXTS,
    }), displayText = _a.displayText, setPlay = _a.setPlay;
    (0, react_2.useEffect)(function () {
        setPlay(true);
    }, []);
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column", padding: 2 },
        react_1.default.createElement(ink_1.Text, null, displayText)));
}
;
exports.default = Minung;
