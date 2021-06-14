interface IRoutes {
  path: string;
  component?: string;
  name?: string;
  key: string;
  exact: boolean;
  redirect?: string;
}

const routes: IRoutes[] = [
  {
    path: '/',
    redirect: '/index',
    exact: true,
    key: 'redirect'
  },
  {
    path: '/index',
    component: 'index',
    name: '登录',
    key: 'index',
    exact: true
  },
  {
    path: '/webpack',
    component: 'webpack',
    name: 'Webpack',
    key: 'webpack',
    exact: true
  },
  {
    path: '/vite',
    component: 'vite',
    name: 'Vite',
    key: 'vite',
    exact: true
  }
];

export { routes, IRoutes };
