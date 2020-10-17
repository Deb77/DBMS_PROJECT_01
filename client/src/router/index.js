import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/Home';
import AddPage from '../views/Add';
import UpdatePage from '../views/Update';
import DeletePage from '../views/Delete';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/add',
        name: 'Add',
        component: AddPage,
    },
    {
        path: '/update',
        name: 'Update',
        component: UpdatePage,
    },
    {
        path: '/delete',
        name: 'Delete',
        component: DeletePage
    }
]

const router = new VueRouter({
    routes,
})

export default router