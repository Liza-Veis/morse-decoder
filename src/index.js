const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let chars = [];
  for (let i = 0; i < expr.length; i += 10) {
    chars.push(expr.slice(i, i + 10));
  }

  let encodedChars = chars.map((cur) => {
    let encodedChar = "";
    if (cur.indexOf("1") !== "-1" && !cur.includes("*")) {
      let char = cur.slice(cur.indexOf("1"));
      for (let i = 0; i < char.length; i += 2) {
        encodedChar += char[i] + char[i + 1] === "10" ? "." : "-";
      }
    } else encodedChar = " ";
    return encodedChar;
  });

  let decodedExpr = "";
  for (let val of encodedChars) {
    decodedExpr += val !== " " ? MORSE_TABLE[val] : " ";
  }
  return decodedExpr;
}

module.exports = {
  decode,
};
