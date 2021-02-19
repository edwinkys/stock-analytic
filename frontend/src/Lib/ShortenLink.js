/*

Function to remove https and www from a link

*/

const ShortenLink = link => {
  let newLink;

  if (link) {
    newLink = link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
    return newLink
  }

  return '-';
};

export default ShortenLink;
