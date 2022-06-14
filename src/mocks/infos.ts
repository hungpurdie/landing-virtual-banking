import img1 from '~/assets/images/svg-1.svg';
import img2 from '~/assets/images/svg-2.svg';
import img3 from '~/assets/images/svg-3.svg';

export interface Info {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  imgStart: boolean;
  img: string;
  imgAlt: string;
  primary: boolean;
  dark: boolean;
  darkText: boolean;
}

export const homeObjOne: Info = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium bank',
  headline: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: img1,
  imgAlt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo: Info = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description:
    'We have you connected no matter where you are located. All you need, is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: img2,
  imgAlt: 'Coin',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree: Info = {
  id: 'services',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our team',
  headline: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: img3,
  imgAlt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
};
