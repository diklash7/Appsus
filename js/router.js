import appHome from './pages/app-home.cmp.js'
import appAbout from './pages/app-about.cmp.js'
import bookApp from './apps/book/pages/book-app.cmp.js'
import noteApp from './apps/keep/pages/note-app.cmp.js'
import mailApp from './apps/mail/pages/mail-app.cmp.js'





const routes = [
    {
        path: '/',
        component: appHome
    },
    {
        path: '/about',
        component: appAbout
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/note',
        component: noteApp
    },
    {
        path: '/mail',
        component: mailApp
    },
];



export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});