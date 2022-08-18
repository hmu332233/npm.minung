"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
// import useTypingEffect from './useTypingEffect';
var TEXTS = [
    "Hi! I'm Minung!",
    "I'm working as a software engineer at Goorm.",
    "",
    "Github: https://github.com/hmu332233",
    "BuyMeACoffe: https://www.buymeacoffee.com/minungHan",
].join('\n');
function Minung() {
    // const { displayText, setPlay } = useTypingEffect({
    //   text: TEXTS,
    // });
    // useEffect(() => {
    //   setPlay(true);
    // }, []);
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column", padding: 2 },
        react_1.default.createElement(ink_1.Text, null, TEXTS)));
}
;
exports.default = Minung;
