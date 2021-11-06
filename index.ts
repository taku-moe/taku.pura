// https://codepoints.net/U+0065

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const lowerCharacters = [
  "a⍺aæɑαаӕ⍶⍺⒜ꜳꜵꜷꜹꜻꜽａ𝐚𝑎𝒂𝒶𝓪𝔞𝕒𝖆𝖺𝗮𝘢𝙖𝚊𝛂𝛼𝜶𝝰𝞪",
  "ᴮᵇḃḅḇℬ⒝ⓑ㏔ｂ𝐛𝑏𝒃𝒷𝓫𝔅𝔟𝕓𝖇𝖻𝗯𝘣𝙗𝚋𝐛bƀƂƃƄɓБЫЬъѢѣҌҍᏏᖯ⒝𝐛𝑏𝒃𝒷𝓫𝔟𝕓𝖇𝖻𝗯𝘣𝙗𝚋",
  "Cćĉċčᶜℂ℃ℭⅭⅽⒸⓒｃ𝐜𝑐𝒄𝒸\uDD88\uDD20𝓬𝕔𝕮𝖼𝘤𝘾𝙲🄒🄫🄭🄲cçϲсҫᴄ⒞ⲥ𐐽",
  "ⅆdđƌɖɗԁᏧᑯᑺᑻᒇ₫ⅆⅾ⒟ꓒ𝐝𝑑𝒅𝒹𝓭𝕕𝖽𝗱𝘥𝙙𝚍",
  "èéêëēĕėęěȅȇȩᴱᵉḙḛẹẻẽₑℯⅇ⒠ⓔｅ𝐞𝑒𝒆𝓮𝔢𝕖𝖊𝖾𝗲𝘦𝙚𝚎",
  "𝐟fſƒʩքᵮẝ⒡ꝷꞙꬵﬀﬁﬂﬃﬄ𝐟𝑓𝒇𝒻𝓯𝔣𝕗𝖋𝖿𝗳𝘧𝙛𝚏ᶠḟ℉ｆ𝐟𝑓𝒇𝒻𝓯𝔉𝔣𝕗𝖋𝖿𝗳𝘧𝙛𝚏",
  "ĝğġģǧǵᴳᵍḡℊ⒢ⓖｇ𝐠𝑔𝒈𝒢𝓖𝓰𝔤𝕘𝖌𝗀𝗴𝘨𝙜𝚐",
  "ℎhħɦћһհᏂᏲℎℏ⒣ꚕｈ𝐡𝒉𝒽𝓱𝔥𝕙𝖍𝗁𝗵𝘩𝙝𝚑Hĥȟʰᴴḣḥḧḩḫẖₕℋℎ⒣ⓗｈ𝐡𝒉𝒽𝓱𝔥𝕙𝕳𝖍𝗁𝗵𝘩𝙝𝚑",
  "Iìíîïĩīĭįİǐȉȋᵢḭỉịⁱ⒤ⓘｉ𝐢𝑖𝒊𝒾𝓘𝓲𝔦𝕀𝕚𝖎𝗂𝗶𝘪𝙞𝚒",
  "ⅉjĳǈǉǋǌɉϳјⅉ⒥ｊ𝐣𝑗𝒋𝒿𝓳𝔧𝕛𝖏𝗃𝗷𝘫𝙟𝚓JĲĳĵǇǈǉǊǋǌǰʲᴶⅉ⒥ⓙⱼ𝐣𝑗𝒋𝒿𝓳𝔧𝕛𝖏𝗃𝗷𝘫𝙟𝚓",
  "𝐤kĸƙκϰкқҟᴋ⒦ⲕ𝐤𝑘𝒌𝓀𝓴𝔨𝕜𝖐𝗄𝗸𝘬𝙠𝚔𝛋𝛞𝜅𝜘𝜿𝝒𝝹𝞌𝞳𝟆",
  "ĺļľĿŀǇǈǉˡᴸḷḻḽₗℓⅬⅼ⒧ⓛＬｌ𝐥𝑙𝒍𝓁𝓵𝔩𝕝𝖑𝗅𝗹𝘭𝙡𝚕",
  "ᴹᵐḿṁᴍMṃₘⅿ⒨ⓜｍ𝐦𝑚𝒎𝓂м𝓶𝔪𝕞𝖒𝗆𝗺𝘮𝙢𝚖",
  "nŉƞɳηпոռᴨᵰ₥⒩",
  "òóôõöōŏőơǒǫȍȏȯᴼᵒọỏₒ⒪ｏ𝐨𝑜𝒐𝓸𝔬𝕠𝖔𝗈𝗼𝘰𝙤𝚘🄾",
  "Pᴾᵖṕṗₚℙ⒫ⓟｐ𝐩𝑝𝒑𝓅𝓹𝔭𝕡𝖕𝗉𝗽𝘱𝙥𝚙",
  "⒬ⓠｑ𝐪𝑞𝒒𝓆𝓺𝔮𝕢𝖖𝗊𝗾𝘲𝙦𝚚",
  "ŕŗřȑȓʳᵣṙṛṟ⒭ⓡｒ𝐫𝑟𝒓𝓇𝓻𝔯𝕣𝖗𝗋𝗿𝘳𝙧𝚛",
  "Sśŝşšșˢṡṣ⒮ⓢｓ𝐬𝑠𝒔𝓈𝓼𝔰𝕤𝖘𝗌𝘀𝘴𝙨𝚜",
  "ţťțᵗṫṭṯṱẗ⒯ⓣｔ𝐭𝑡𝒕𝓉𝓽𝔱𝕥𝖙𝗍𝘁𝘵𝙩𝚝",
  "ùúûᴜüũūŭUůűųưǔȕＵȗᵁᵘᵤṳ\uFF35ṵṷụủ℆𝓾⒰ⓤｕ𝐮𝑢𝒖𝓊𝓾𝔲𝕦𝖚𝗎𝘂𝘶𝙪𝚞𝐮uʋυцսᴜᵫᵾ℆ꜷꞟꭎꭒ",
  "ᵛᵥṽṿⱽ𝐯𝑣𝒗𝓋𝓿𝔳𝕧𝖛𝗏𝘃𝘷𝙫𝚟",
  "ŵʷᵂẁ⒲ⓦｗ𝐰𝑤𝒘𝓌𝔀𝔴𝕨𝖜𝗐𝘄𝘸𝙬𝚠",
  "ˣẋẍₓ⒳ⓧｘ𝐱𝑥𝒙𝓍𝔁𝔵𝕩𝖝𝗑𝘅𝘹𝙭𝚡🅇",
  "ýÿŷȳʸẏẙỳỵỷỹ⒴ⓨｙ𝐲𝑦𝒚𝓎𝔂𝔶𝕪𝖞𝗒𝘆𝘺𝙮𝚢",
  "ZźżžǱǲǳᶻẑẓẕℨ⒵Ⓩⓩ㎐㎑㎒㎓㎔ｚ𝐳𝑍𝑧𝒛𝒵𝓏𝓩𝔃𝔷𝕫𝖅𝖟𝗓𝘇𝘻𝙯𝚉𝚣🄮🅉𝐳zƶǲǳȥʐʣʫᴢᵶ⒵",
];

/**
 * Normalize a unicode string
 * @author Geoxor & Cimok
 */
export default function normalize(string: string): string {
  // Remove weird characters
  string = string.replace(/[\uD83C]/g, "");

  // Remove weird spaces
  string = string.replace(/[\u180E\u200C\u200D\u2060\uFEFF]/g, " ");

  // Remove invisible characters
  string = string.replace(/[\u200E\u200B\u061C]/g, "");

  // Replace odd characters
  for (const i in alphabet) {
    const characterSet = lowerCharacters[i];

    for (const character of characterSet) {
      const regex = new RegExp(character, "g");
      string = string.replace(regex, alphabet[i]);
    }
  }

  // Remove High Surrogates
  string = string.replace(/[\ud835\u200f]/g, "");

  return string;
}
