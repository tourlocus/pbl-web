import {
  Top,
  SignUp,
  SignIn,
  Search,
  User,
  Article,
  Present,
  NotFound,
} from '@/pages';

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top,
  },

  {
    path: '/signup',
     name: 'SignUp',
     component: SignUp,
  },

  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },

  {
    path: '/search',
    name: 'Search',
    component: Search,
    props: (route) => ({query: route.query.q}),
  },

  {
    path: '/:name',
    name: 'UserItem',
    component: User,
  },

  {
    path: '/:name/create',
    name: 'ArticleCreate',
    component: Article.Create,
  },

  {
    path: '/:name/:id',
    name: 'ArticleDetail',
    component: Article.Detail,
  },

  {
    path: '/:name/edit/:id',
    name: 'ArticleEdit',
    component: Article.Edit,
  },

  {
    path: '/presents/:name/create',
    name: 'PresentCreate',
    component: Present.Create,
  },

  {
    path: '/presents/:name/edit/:id',
    name: 'PresentEdit',
    component: Present.Edit,
  },

  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
