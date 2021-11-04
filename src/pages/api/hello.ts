// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { invert } from 'lodash';
import { urlTemplateMapping } from '../../config/urlTemplateMapping';

export type Data = {
  template?: string;
  error: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { encodedUrl } = req.body;
  const urlToTemplate = invert(urlTemplateMapping);
  if (Object.keys(urlToTemplate).includes(encodedUrl)) {
    return res
      .status(200)
      .json({ template: urlToTemplate[encodedUrl], error: false });
  }
  return res.status(404).json({ error: true });
}
