<template>
    <v-app dark>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Docker</span>
                <span class="font-weight-light">Kitten</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                    flat
                    href="https://github.com/vuetifyjs/vuetify/releases/latest"
                    target="_blank"
            >
                <span class="mr-2">Latest Release</span>
            </v-btn>
        </v-toolbar>

        <v-content>
            We are using Node.js <b>{{ versions.node }}</b>,
            Chromium <b>{{ versions.chrome }}</b>,
            and Electron <b>{{ versions.electron }}</b>.
            <ContainerList v-bind:containers="containers"></ContainerList>
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import ContainerList from './ContainerList.vue'

    @Component({
        computed: {
            versions: () => {
                return process.versions
            },
            containers() {
                return this.$store.getters.containers
            },
        },
        components: {
            ContainerList
        }
    })
    export default class App extends Vue {
    }
</script>

<style>
    v-app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
