export const normalizeLink = (link: string) => {
  if (/^(http(s?):\/\/)/i.test(link)) {
    return link;
  }
  return `https://${link}`;
};

export const stripLinkProtocol = (link: string) =>
  link.replace(/(^\w+:|^)\/\//i, '');
