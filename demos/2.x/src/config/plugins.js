import Vue             from 'vue'
import upload          from '@websanova/vue-upload/src/v2.js';
import httpAxios       from '@websanova/vue-upload/src/drivers/http/axios.js';
// import httpVueResource from '@websanova/vue-upload/src/drivers/http/vue-resource.js';

Vue.use(upload, {
    plugins: {
        http: Vue.axios, // Axios
        // http: Vue.http, // Vue Resource
    },
    drivers: {
        http: httpAxios,
        // http: httpVueResource
    },
    options: {
        
    }
});