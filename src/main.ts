import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './components/App.vue'
import electron from 'electron'
import store from './store'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
    // @ts-ignore
    render: h => h(App),
    store,
    mounted() {
        electron.ipcRenderer.on('ping', (event: string, message: any) => {
            this.$store.dispatch('updateContainers', message)
        })
    }
}).$mount('#app')
