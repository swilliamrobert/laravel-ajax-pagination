
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// import Pagination from './components/PaginationComponent.vue';

Vue.component('pagination', require('./components/PaginationComponent.vue'));

const app = new Vue({
    el: '#app',

    data: {
        posts: {},
        pagination: {
            'current_page': 1
        }
    },
    //
    // components: {
    //     Pagination,
    // },

    methods: {
        fetchPosts(page) {
            axios.get('posts?page=' + this.pagination.current_page)
                .then(response => {
                    this.posts = response.data.data.data;
                    this.pagination = response.data.pagination;
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        }
    },

    mounted() {
        this.fetchPosts();
    }
});
