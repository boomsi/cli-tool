import Webpack from '@/assets/Webpack.svg';
import Vite from '@/assets/Vite.svg';

export interface IPackageItem {
  name: string;
  icon: string;
  route: string;
}

export const PACKAGE_LIST: IPackageItem[] = [
  {
    name: 'Webpack',
    route: '/webpack',
    icon: Webpack
  },
  {
    name: 'Vite',
    route: '/vite',
    icon: Vite
  }
];
