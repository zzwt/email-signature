import { ImFacebook } from '@react-icons/all-files/im/ImFacebook';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { SiInstagram } from '@react-icons/all-files/si/SiInstagram';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { ImSkype } from '@react-icons/all-files/im/ImSkype';
import { FaTumblr } from '@react-icons/all-files/fa/FaTumblr';
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle';
import { FaFacebookMessenger } from '@react-icons/all-files/fa/FaFacebookMessenger';
import { IoLogoWhatsapp } from '@react-icons/all-files/io/IoLogoWhatsapp';
import { FaQq } from '@react-icons/all-files/fa/FaQq';
import { ImPinterest } from '@react-icons/all-files/im/ImPinterest';
import { AiFillYoutube } from '@react-icons/all-files/ai/AiFillYoutube';
import { GrVimeo } from '@react-icons/all-files/gr/GrVimeo';
import { IoLogoWechat } from '@react-icons/all-files/io5/IoLogoWechat';
import { GoMarkGithub } from '@react-icons/all-files/go/GoMarkGithub';
import { FaDropbox } from '@react-icons/all-files/fa/FaDropbox';
import { FaSlackHash } from '@react-icons/all-files/fa/FaSlackHash';
import { FaRedditAlien } from '@react-icons/all-files/fa/FaRedditAlien';
import { SiTiktok } from '@react-icons/all-files/si/SiTiktok';
import { FaMicrosoft } from '@react-icons/all-files/fa/FaMicrosoft';
import { FaBehance } from '@react-icons/all-files/fa/FaBehance';
import { FaWeibo } from '@react-icons/all-files/fa/FaWeibo';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import { SiSnapchat } from '@react-icons/all-files/si/SiSnapchat';
import { FaQuora } from '@react-icons/all-files/fa/FaQuora';
import { RiBilibiliFill } from '@react-icons/all-files/ri/RiBilibiliFill';
import { FaPaypal } from '@react-icons/all-files/fa/FaPaypal';
import { FaMediumM } from '@react-icons/all-files/fa/FaMediumM';
import { FaYelp } from '@react-icons/all-files/fa/FaYelp';
import { SiDribbble } from '@react-icons/all-files/si/SiDribbble';
import React from 'react';

interface IiconMapping {
  [k: string]: React.ComponentType;
}

interface IiconStorageMapping {
  [k: string]: string;
}

export const iconMapping: IiconMapping = {
  ImFacebook,
  FaTwitter,
  SiInstagram,
  FaLinkedinIn,
  ImSkype,
  FaTumblr,
  FaGoogle,
  FaFacebookMessenger,
  IoLogoWhatsapp,
  FaQq,
  ImPinterest,
  AiFillYoutube,
  GrVimeo,
  IoLogoWechat,
  GoMarkGithub,
  FaDropbox,
  FaSlackHash,
  FaRedditAlien,
  SiTiktok,
  FaMicrosoft,
  FaBehance,
  FaWeibo,
  FaTelegramPlane,
  SiSnapchat,
  FaQuora,
  RiBilibiliFill,
  FaPaypal,
  FaMediumM,
  FaYelp,
  SiDribbble,
};

export const iconStorageMapping: IiconStorageMapping = {
  'ImFacebook-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974208/facebook-outline_hqdglz.png',
  'FaTwitter-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/twitter-outline_o1iibh.png',
  'SiInstagram-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974209/instagram-outline_immtkv.png',
  'FaLinkedinIn-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974209/linkedin-outline_pj51vk.png',
  'ImSkype-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974211/Skype-outline_sxs6cn.png',
  'FaTumblr-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/tumblr-outline_chgov6.png',
  'FaGoogle-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974208/google-outline_ujamwv.png',
  'FaFacebookMessenger-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974209/messenger-outline_g7pjsx.png',
  'IoLogoWhatsapp-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/whatsapp-outline_iihyyg.png',
  'FaQq-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974210/qq-outline_cupv5r.png',
  'ImPinterest-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974210/pinterest-outline_k3ynvu.png',
  'AiFillYoutube-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974213/youtube-outline_bxjolg.png',
  'GrVimeo-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/vimeo-outline_tgd46p.png',
  'IoLogoWechat-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/wechat-outline_llbtdu.png',
  'GoMarkGithub-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974208/github-outline_uxxshh.png',
  'FaDropbox-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974208/dropbox-outline_abumif.png',
  'FaSlackHash-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974211/slack-outline_ilteod.png',
  'FaRedditAlien-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974210/reddit-outline_f9kekv.png',
  'SiTiktok-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974211/tiktok-outline_sbtozb.png',
  'FaMicrosoft-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974209/microsoft-outline_mfytqf.png',
  'FaBehance-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974207/behance-outline_qpj4ps.png',
  'FaWeibo-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/weibo-outline_d2t8aj.png',
  'FaTelegramPlane-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974211/telegram-outline_sl5fu8.png',
  'SiSnapchat-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974211/snapchat-outline_cqqogh.png',
  'FaQuora-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974210/quora-outline_d9ttbe.png',
  'RiBilibiliFill-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974207/bilibili-outline_g8cc7l.png',
  'FaPaypal-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974210/paypal-outline_sxotzg.png',
  'FaMediumM-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974209/medium-outline_btfcet.png',
  'FaYelp-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/yelp-outline_hu1qm9.png',
  'SiDribbble-outline':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974207/dribbble-outline_hicgry.png',
  'ImFacebook-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974208/facebook-fill_s2mv9z.png',
  'FaTwitter-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/twitter-fill_qxuchj.png',
  'SiInstagram-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974209/instagram-fill_xfjy26.png',
  'FaLinkedinIn-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974209/linkedin-fill_nzhrvt.png',
  'ImSkype-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974210/Skype-fill_tw2qpg.png',
  'FaTumblr-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974211/tumblr-fill_rhzkxd.png',
  'FaGoogle-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974208/google-fill_ascoio.png',
  'FaFacebookMessenger-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974209/messenger-fill_fffgeq.png',
  'IoLogoWhatsapp-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/whatsapp-fill_puwpf2.png',
  'FaQq-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974210/qq-fill_yhibke.png',
  'ImPinterest-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974210/pinterest-fill_mypypp.png',
  'AiFillYoutube-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974213/youtube-fill_vvckxh.png',
  'GrVimeo-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/vimeo-fill_ubckiz.png',
  'IoLogoWechat-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/wechat-fill_p5yxjo.png',
  'GoMarkGithub-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974208/github-fill_bjmq2z.png',
  'FaDropbox-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974208/dropbox-fill_arpsab.png',
  'FaSlackHash-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974211/slack-fill_n2bfdi.png',
  'FaRedditAlien-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974210/reddit-fill_hnbsjk.png',
  'SiTiktok-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974211/tiktok-fill_dqndqm.png',
  'FaMicrosoft-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974209/microsoft-fill_v8rv0z.png',
  'FaBehance-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974207/behance-fill_pec0om.png',
  'FaWeibo-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/weibo-fill_xxiajj.png',
  'FaTelegramPlane-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974211/telegram-fill_ex3j0h.png',
  'SiSnapchat-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974211/snapchat-fill_mpjsg0.png',
  'FaQuora-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974210/quora-fill_bymwj3.png',
  'RiBilibiliFill-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974207/bilibili-fill_xwfeds.png',
  'FaPaypal-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974210/paypal-fill_h8gt2z.png',
  'FaMediumM-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974209/medium-fill_jexwe3.png',
  'FaYelp-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974212/yelp-fill_gk9lv4.png',
  'SiDribbble-fill':
    'https://res.cloudinary.com/dacr0umgu/image/upload/w_20,h_20,c_scale/v1636974208/dribbble-fill_bizcak.png',
};
