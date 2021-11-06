"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("ts-mocha");
const chai_1 = __importDefault(require("chai"));
const mocha_1 = require("mocha");
const __1 = __importDefault(require(".."));
const cums = [
    "𝔠𝔲𝔪",
    "𝖈𝖚𝖒",
    "𝓬Ｕм",
    "cu؜m",
    "C‏‏‎UM",
    "𝓬𝓾𝓶",
    "𝒸𝓊𝓂",
    "C​u​m",
    "𝕔𝕦𝕞",
    "ｃｕｍ",
    "ᴄᴜᴍ",
];
describe("Pura normalizer", () => {
    for (const cum of cums) {
        (0, mocha_1.it)(`can convert '${cum}'  to cum`, async () => {
            // console.log(cum.split("").map(c => c.charCodeAt(0).toString(16)));
            const normalized = (0, __1.default)(cum);
            // console.log(normalized.split("").map(c => c.charCodeAt(0).toString(16)));
            chai_1.default.expect(normalized).to.equal("cum");
        });
    }
});
//# sourceMappingURL=index.test.js.map