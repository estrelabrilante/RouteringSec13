import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import App from './App.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
// Route config:
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams'
    }, //redirect property, ,,
    // {
    //   path: '/teams',
    //   component: TeamsList,
    //   alias: '/' //alias path
    // },
    {
      name: 'tms',
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter
      }, // our-domain.com/teams
      children: [
        {
          name: 'team-members',
          // Nested routes
          path: ':teamId', // our-domain.com/teams/t1
          components: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      } // our-domain.com/users
    },
    // {
    //   // passing data with route params
    //   path: '/teams/:tmId',
    //   component: TeamMembers,
    //   props: true
    // },
    {
      path: '/:notFound(.*)', //catchAll
      component: NotFound // our-domain.com/hi
    }
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);
app.use(router);

app.mount('#app');
