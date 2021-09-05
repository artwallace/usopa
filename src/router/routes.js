
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/aids',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'PlayerAids', component: () => import('pages/PlayerAids.vue') },
      { path: '/aids/combat', name: 'CombatResolution', component: () => import('pages/CombatResolution.vue') }
    ]
  },

  {
    path: '/units',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Units', component: () => import('pages/Units.vue') },
      { path: '/units/:id', name: 'UnitsViewer', component: () => import('pages/UnitViewer.vue') }
    ]
  },

  {
    path: '/equipment',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Equipment', component: () => import('pages/Equipment.vue') }
    ]
  },

  {
    path: '/vehicles',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Vehicles', component: () => import('pages/Vehicles.vue') }
    ]
  },

  {
    path: '/lists',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Lists', component: () => import('pages/Lists.vue') }
    ]
  },

  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'About', component: () => import('pages/About.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
