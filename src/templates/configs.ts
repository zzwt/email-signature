import { ContentType, IconDisplayType } from '../types';

const configs = {
  Template1: {
    fields: [
      {
        label: {
          value: 'Full Name',
          type: { editable: false, value: 'text' }, // text | icon: not supported
          color: { editable: false },
          display: { editable: false, value: true },
          bold: { editable: false, value: false },
          size: { editable: false, value: 12 },
        },
        content: {
          value: 'Jennie Doe',
          type: { editable: false, value: ContentType.TEXT },
          color: { editable: true },
          bold: { editable: true, value: true },
          size: { editable: true, value: 20 },
        },
        key: 0,
      },
      {
        label: {
          value: 'Title',
          type: { editable: false, value: 'text' }, // text | icon
          color: { editable: false },
          display: { editable: false, value: true },
          bold: { editable: false, value: false },
          size: { editable: false, value: 12 },
        },
        content: {
          value: 'Managing Director',
          type: { editable: false, value: ContentType.TEXT },
          color: { editable: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 1,
      },
      {
        label: {
          value: 'Website:',
          type: { editable: true, value: 'text' }, // text | icon
          color: { editable: true },
          display: { editable: true, value: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        content: {
          value: 'www.realcommercial.com.au',
          type: { editable: true, value: ContentType.TEXT },
          color: { editable: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 2,
      },
      {
        label: {
          value: 'Tel:',
          type: { editable: true, value: 'text' }, // text | icon
          color: { editable: true },
          display: { editable: true, value: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        content: {
          value: '(02) 9348 4323',
          type: { editable: true, value: ContentType.TEXT },
          color: { editable: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 3,
      },
      {
        label: {
          value: 'Email:',
          type: { editable: true, value: 'text' }, // text | icon
          color: { editable: true },
          display: { editable: true, value: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        content: {
          value: 'JennieD@gmail.com',
          type: { editable: true, value: ContentType.EMAIL },
          color: { editable: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 4,
      },
      {
        label: {
          value: 'Address:',
          type: { editable: true, value: 'text' }, // text | icon
          color: { editable: true },
          display: { editable: true, value: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        content: {
          value: '303 level 3/65 York St, Sydney',
          type: { editable: true, value: ContentType.TEXT },
          color: { editable: true },
          bold: { editable: true, value: false },
          size: { editable: true, value: 12 },
        },
        key: 5,
      },
    ],
    social: [
      {
        icon: 'ImFacebook',
        link: 'https://www.facebook.com/jennie.doe.7587',
      },
      {
        icon: 'FaTwitter',
        link: 'https://twitter.com/cpaterso',
      },
      {
        icon: 'FaLinkedinIn',
        link: 'https://twitter.com/cpaterso',
      },
    ],
    images: [
      {
        url: '/avatar.png',
      },
    ],
    meta: {
      primary: '#5661b6',
      background: '#ffffff',
      text: '#626262',
      socialIconType: IconDisplayType.FILL_CIRCLE,
      fontFamily:
        'Verdana, Roboto, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif',
    },
  },
};

export default configs;
