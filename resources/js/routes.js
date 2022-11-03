export const routes = [
    {
        name: 'index',
        path: '/',
        component: () => import('./components/Index.vue'),


    },
    {
        name: 'todo',
        path: '/:id',
        component: () => import('./components/CategorywiseTodo.vue'),


    },

]