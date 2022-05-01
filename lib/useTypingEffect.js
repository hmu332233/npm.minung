"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useDidUpdateEffect_1 = __importDefault(require("./useDidUpdateEffect"));
function useTypingEffect(_a) {
    var text = _a.text;
    var _b = (0, react_1.useState)(false), end = _b[0], setEnd = _b[1];
    var _c = (0, react_1.useState)(false), play = _c[0], setPlay = _c[1];
    var _d = (0, react_1.useState)(''), displayText = _d[0], setDisplayText = _d[1];
    var _e = (0, react_1.useState)(-1), textCount = _e[0], setTextCount = _e[1];
    (0, useDidUpdateEffect_1.default)(function () {
        if (textCount >= text.length) {
            setPlay(false);
            setEnd(true);
            return;
        }
        setDisplayText(function (str) { return str + text[textCount]; });
    }, [textCount]);
    (0, react_1.useEffect)(function () {
        if (!play) {
            return;
        }
        var timer = setInterval(function () {
            setTextCount(function (v) { return v + 1; });
        }, 30);
        return function () { return clearInterval(timer); };
    }, [play]);
    return { displayText: displayText, play: play, setPlay: setPlay, end: end };
}
;
exports.default = useTypingEffect;
