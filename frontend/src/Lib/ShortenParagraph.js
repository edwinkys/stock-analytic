/*

Function to return the first 2 lines of a paragraph.

*/

const ShortenParagraph = paragraph => {
  if (paragraph) {
    let result = '';
    let parArray = paragraph.split('.');

    for (let i = 0; i < parArray.length; i++) {
      parArray[i].replace(/\s+/g, ' ').trim();
    }

    result = parArray[0] + '. ' + parArray[1] + '. ' + parArray[2] + '. ' + parArray[3] + '.';

    return result;
  }

  return '-';
};

export default ShortenParagraph;
