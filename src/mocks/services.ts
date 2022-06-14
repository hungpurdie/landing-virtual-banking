import img1 from '~/assets/images/svg-1.svg';
import img2 from '~/assets/images/svg-2.svg';
import img3 from '~/assets/images/svg-3.svg';

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: img1,
    title: 'Reduce Expenses',
    description: 'We help reduce your fess and increase your overall revenue.',
  },
  {
    icon: img2,
    title: 'Virtual Offices',
    description: 'You can access your platform online any where in the world.',
  },
  {
    icon: img3,
    title: 'Premium Benefits',
    description: 'Unlock our special membership card that return 5% cash back.',
  },
];
