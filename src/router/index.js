import Vue from 'vue';
import VueRouter from 'vue-router';

// templates imports
import Home from '../views/Home.vue'
import Products from '../views/Products.vue';


Vue.use(VueRouter)

export const router = () => [
    {
        path:'/',
        component: ()=> Home ,
        name: 'Home'
    },
    {
        path:'/products',
        component: ()=> Products ,
        name: 'Products'
    }
]

export default router;