<template>
    <v-data-table
            :headers="headers"
            :items="containers"
            class="elevation-1"
            item-key="Id"
            hide-actions
    >
        <template v-slot:items="props">
            <td :title="props.item.Id">{{ props.item.Id | substr}}</td>
            <td class="text-xs-left">{{ props.item.Image }}</td>
            <td class="text-xs-left">{{ props.item.State}}</td>
            <td class="text-xs-left">{{ props.item.Status}}</td>
            <td class="text-xs-center">
                <v-switch v-model="switches[props.item.Id]"></v-switch>
            </td>
        </template>
    </v-data-table>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        data() {
            return {
                headers: [{
                    text: 'Id',
                    align: 'left',
                    sortable: false,
                    value: 'Id'
                },
                    {text: 'Image', value: 'Image'},
                    {text: 'State', value: 'State'},
                    {text: 'Status', value: 'Status'},
                ],
            }
        },
        computed: {
            switches: function () {
                let sw: any = {}
                // @ts-ignore
                if (this.containers) {
                    // @ts-ignore
                    this.containers.forEach((container: any) => {
                        sw[container.Id] = container.State === 'running'
                    })
                }
                return sw
            }
        },
        props: {
            containers: Array
        },
        filters: {
            substr: function (value: string): string {
                return value.substring(0, 8)
            }
        },
        components: {}
    })
    export default class ContainerList extends Vue {
    }
</script>
