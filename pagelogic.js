/*structure: variables full of text, iterated over, and printed one at a time.
Need function that iterates over text, writes one letter at a time to HTML,
experiences a delay, and then proceeds to write the next letter. Punctuation
has a longer delay.

This may also have formatting in order to display key bits of text as span
elements or links.

All response lines will be preceded by a > to indicate a new section.

All command lines will be postceded by a < to indicate text entered by the user
*/

const startLine = "> Hello. Welcome to the front page of my website, which is styled to look like an emulation of the text adventures I grew up playing. If you'd like to, you can skip this bit and go right to the content..."
const writeableSection = document.getElementById('faketerminal__content');
var step = 0;

function writeText(textToWrite) {
  var char = textToWrite[step];
  step += 1;
  writeableSection.textContent = textToWrite.substring(0, step);
  if (step <= textToWrite.length) {
    setTimeout(writeText, calcDelay(char), textToWrite);
  }
  console.log(step);
}

function calcDelay(char) {
  if (/[.?!]/.test(char)) {
    return 2000;
  } else if (/-/.test(char)) {
    return 500;
  } else if (/\w|\d/.test(char)) {
    return 20;
  }
}

setTimeout(writeText, 3000, startLine);
