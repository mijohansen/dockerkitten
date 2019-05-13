import {MutationTree} from 'vuex'

import {COLOR, CONTAINERS} from './mutation-types'
import State from './state'
import {Container} from 'dockerode'

const mutations: MutationTree<State> = {
    [COLOR](state: State, newColor: string): void {
        state.color = newColor
    },
    [CONTAINERS](state: State, containers: Array<Container>): void {
        containers.forEach((updated: any) => {
            const existing: any = state.containers.find((x: any) => x.Id === updated.Id)
            if (!existing) {
                state.containers.push(updated)
            } else {
                Object.keys(existing).forEach(function (key: string) {
                    existing[key] = updated[key]
                })
            }
        })
    }
}

export default mutations
