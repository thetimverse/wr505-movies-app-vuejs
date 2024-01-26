import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import MoviesView from '@/views/MoviesView.vue';
import ActorsView from '@/views/ActorsView.vue';
import CategoriesView from '@/views/CategoriesView.vue';
import RegisterFormView from '@/views/RegisterFormView.vue';
import ActorView from '@/views/ActorView.vue';
import MovieView from '@/views/MovieView.vue';
import Logout from '@/views/Logout.vue';
import ProfileView from '@/views/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesView
    },
    {
      path: "/actors",
      name: "actors",
      component: ActorsView
    },
    {
			path: "/movies/:id",
			component: MovieView,
		},
		{
			path: "/actors/:id",
			component: ActorView,
		},
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView
    },
    {
      path: "/register",
      name: "register",
      component: RegisterFormView
    },
  ]
});

export default router;
