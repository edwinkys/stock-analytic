/*

Function to return the first 2 lines of a paragraph.

*/

const ShortenParagraph = paragraph => {
  let result = '';
  let parArray = paragraph.split('.');

  for (let i = 0; i < parArray.length; i++) {
    parArray[i].replace(/\s+/g, ' ').trim();
  }

  result = parArray[0] + '. ' + parArray[1] + '. ' + parArray[2] + '.';

  return result;
};

export default ShortenParagraph;
