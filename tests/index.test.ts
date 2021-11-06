import "ts-mocha";
import chai from "chai";
import { it } from "mocha";
import normalize from "..";

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
    it(`can convert '${cum}'  to cum`, async () => {
      // console.log(cum.split("").map(c => c.charCodeAt(0).toString(16)));
      const normalized = normalize(cum);
      // console.log(normalized.split("").map(c => c.charCodeAt(0).toString(16)));
      chai.expect(normalized).to.equal("cum");
    });
  }
});
