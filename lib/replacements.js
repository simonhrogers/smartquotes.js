const pL = 'a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ';
const word = `[${pL}_0-9]`;
const nonWord = `[^${pL}_0-9]`;

module.exports = [
  // triple prime
  [/'''/g, retainLength => '\u2034' + (retainLength ? '\u2063\u2063' : '')],
  // beginning "
  [new RegExp(`(${nonWord}|^)"(${word})`, 'g'), '$1\u201c$2'],
  // ending "
  [/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, '$1\u201d$2'],
  // remaining " at end of word
  [/([^0-9])"/g, '$1\u201d'],
  // double prime as two single quotes
  [/''/g, retainLength => '\u2033' + (retainLength ? '\u2063' : '')],
  // beginning '
  [new RegExp(`(${nonWord}|^)'(\\S)`, 'g'), '$1\u2018$2'],
  // conjunction's possession
  [new RegExp(`(${word})'([${pL}])`, 'ig'), '$1\u2019$2'],
  // abbrev. years like '93
  [new RegExp(`(\\u2018)([0-9]{2}[^\\u2019]*)(\\u2018([^0-9]|$)|$|\\u2019[${pL}])`, 'ig'), '\u2019$2$3'],
  // ending '
  [new RegExp(`((\\u2018[^']*)|[${pL}])'([^0-9]|$)`, 'ig'), '$1\u2019$3'],
  // backwards apostrophe
  [new RegExp(`(\\B|^)\\u2018(?=([^\\u2018\\u2019]*\\u2019\\b)*([^\\u2018\\u2019]*\\B${nonWord}[\\u2018\\u2019]\\b|[^\\u2018\\u2019]*$))`, 'ig'), '$1\u2019'],
  // double prime
  [/"/g, '\u2033'],
  // prime
  [/'/g, '\u2032'],
  [/([0-9])-([0-9])/g, '$1 – $2'], // hyphen to en-dash between numbers
  [/([0-9]) -([0-9])/g, '$1 – $2'], // hyphen to en-dash between numbers
  [/([0-9])- ([0-9])/g, '$1 – $2'], // hyphen to en-dash between numbers
  [/([0-9]) - ([0-9])/g, '$1 – $2'], // hyphen to en-dash between numbers which mistakenly have a space before and after
  [/([0-9]) – ([0-9])/g, '$1 – $2'], // closing up space between number ranges if en-dash correctly used but spaces incorrectly used
  [/([0-9])– ([0-9])/g, '$1 – $2'], // closing up space between number ranges if en-dash correctly used but spaces incorrectly used
  [/([0-9]) –([0-9])/g, '$1 – $2'], // closing up space between number ranges if en-dash correctly used but spaces incorrectly used
  [/(.)\u2013(.)/g, '$1 – $2'], // closing up space between number ranges if en-dash correctly used but spaces incorrectly used
  [/(\s)-(\s)/g, '$1–$2'], // hyphen to en-dash between spaces
  [/(.)-(\d)/g, '$1–$2'], // hyphen to en-dash between character and digit
  [/(\d)-(.)/g, '$1 – $2'], // hyphen to en-dash between digit and character
  [/([0-9])x(\s)/g, '$1×$2'], // x to × after digit with following space
  [/(\s)x([0-9])/g, '$1×$2'], // x to × before digit with preceeding space
  [/([0-9])X(\s)/g, '$1×$2'], // X to × after digit with following space
  [/(\s)X([0-9])/g, '$1×$2'], // X to × before digit with preceeding space
  [/(\s)x(\s)/g, '$1×$2'], // x to × between spaces
  [/(\s)X(\s)/g, '$1×$2'], // X to × between spaces
  [/(\d)cm/g, '$1 cm'], // space after digit and cm
  [/(\d)CM/g, '$1 cm'], // space after digit and cm
  [/(\d)mm/g, '$1 mm'], // space after digit and mm
  [/(\d)MM/g, '$1 mm'], // space after digit and mm
  [/(CO2)/g, 'CO₂'],
  [/1\/2/g, '½'], // 1/2 to ½
  [/1\/3/g, '⅓'], // 1/3 to ⅓
  [/2\/3/g, '⅔'], // 2/3 to ⅔
  [/1\/4/g, '¼'], // 1/4 to ¼
  [/3\/4/g, '¾'], // 3/4 to ¾
  [/1\/5/g, '⅕'], // 1/5 to ⅕
  [/2\/5/g, '⅖'], // 2/5 to ⅖
  [/3\/5/g, '⅗'], // 3/5 to ⅗
  [/4\/5/g, '⅘'], // 4/5 to ⅘
  [/1\/6/g, '⅙'], // 1/6 to ⅙
  [/5\/6/g, '⅚'], // 5/6 to ⅚
  [/1\/8/g, '⅛'], // 1/8 to ⅛
  [/3\/8/g, '⅜'], // 3/8 to ⅜
  [/5\/8/g, '⅝'], // 5/8 to ⅝
  [/7\/8/g, '⅞'], // 7/8 to ⅞
  [/(\.\.\.)/g, '…']
];
