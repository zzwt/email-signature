export const urlTemplateMapping = {
  Template1: 'lkhj3409fdjuo34',
  Template2: '2',
};

const dev = process.env.NODE_ENV !== 'production';

export const apiServer = dev
  ? 'http://localhost:3000/api/hello'
  : 'https://sigmailer.joellu.dev/api/hello';
