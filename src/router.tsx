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
    redirect: '/login',
    exact: true,
    key: 'redirect'
  },
  {
    path: '/login',
    component: 'login',
    name: '登录',
    key: 'login',
    exact: true
  },
  {
    path: '/registry',
    component: 'registry',
    name: '注册',
    key: 'registry',
    exact: true
  }
];

export { routes, IRoutes };
