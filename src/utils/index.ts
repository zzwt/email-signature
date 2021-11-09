export const normalizeLink = (link: string) => {
  if (/^(http(s?):\/\/)/i.test(link)) {
    return link;
  }
  return `https://${link}`;
};

export const stripLinkProtocol = (link: string) =>
  link.replace(/(^\w+:|^)\/\//i, '');

export const imageConfigToStyle = (imageConfig: any, dimension: number) => {
  const ratio = dimension / (imageConfig.naturalWidth * imageConfig.width);
  const zoomedWidth = ratio * imageConfig.naturalWidth;
  const zoomedHeight = ratio * imageConfig.naturalHeight;
  return {
    width: `${dimension}px`,
    height: `${dimension}px`,
    backgroundImage: `url(${imageConfig.url})`,
    backgroundPosition: `-${zoomedWidth * imageConfig.x}px -${
      zoomedHeight * imageConfig.y
    }px`,
    backgroundSize: `${zoomedWidth}px ${zoomedHeight}px`,
    borderRadius: '50%',
  };
};

export const copyWithStyle = (element: string) => {
  const doc = document;
  const text = doc.getElementById(element);
  let range;
  let selection;

  if (doc.body.createTextRange) {
    range = doc.body.createTextRange();
    range.moveToElement(text);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = doc.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
};
