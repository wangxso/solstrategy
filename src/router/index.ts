import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Import views
import HomeView from '@/views/HomeView.vue';
import OurStoryView from '@/views/OurStoryView.vue';
import WorkView from '@/views/WorkView.vue';
import CommunityView from '@/views/CommunityView.vue';
import CareersView from '@/views/CareersView.vue';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'SolStrategy - Professional Investment & Security Consulting',
      description: 'Singapore-based consulting firm specializing in public relations, investment advisory, and security services.'
    }
  },
  {
    path: '/our-story',
    name: 'OurStory',
    component: OurStoryView,
    meta: {
      title: 'Our Story - SolStrategy',
      description: 'Learn about SolStrategy\'s journey, mission, and the team behind our success in Singapore and across Asia-Pacific.'
    }
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkView,
    meta: {
      title: 'Our Work - SolStrategy',
      description: 'Explore SolStrategy\'s portfolio of successful projects and case studies across public relations, investment advisory, and security consulting.'
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: CommunityView,
    meta: {
      title: 'Community - SolStrategy',
      description: 'Discover how SolStrategy contributes to the community through initiatives, partnerships, and social responsibility programs.'
    }
  },
  {
    path: '/careers',
    name: 'Careers',
    component: CareersView,
    meta: {
      title: 'Careers - SolStrategy',
      description: 'Join the SolStrategy team. Explore career opportunities and discover what it\'s like to work at Singapore\'s leading consulting firm.'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Account for fixed header
      };
    }
    return { top: 0 };
  }
});

// Update page title and meta description
router.beforeEach((to, _from, next) => {
  if (to.meta?.title) {
    document.title = to.meta.title as string;
  }
  
  if (to.meta?.description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description as string);
    }
  }
  
  next();
});

export default router;