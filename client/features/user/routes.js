import {
  EditUser,
  Profile,
  Offers,
  Likes,
  Friends,
  AuthHOC,
} from 'features'


export const userRoutes = () => [
  {
    path: '/edit/:section',
    exact: true,
    component: AuthHOC(EditUser),
  },
  {
    path: '/user/:id/offers',
    exact: true,
    component: Offers,
  },
  {
    path: '/user/:id',
    exact: true,
    component: Profile,
  },
  {
    path: '/user/:id/likes',
    exact: true,
    component: Likes,
  },
  {
    path: '/user/:id/friends',
    exact: true,
    component: Friends,
  },
]
