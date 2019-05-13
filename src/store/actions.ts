import { ActionContext, ActionTree } from 'vuex'

import { COLOR, CONTAINERS } from './mutation-types'
import State from './state'
import {Container} from 'dockerode'

// ActionTree<[current state], [root state]>
const actions: ActionTree<State, State> = {
    updateColor({ commit }: ActionContext<State, State>, newColor: string): void {
        commit(COLOR, newColor)
    },
    updateContainers({ commit }: ActionContext<State, State>, containers: Array<Container>): void {
        commit(CONTAINERS, containers)
    }
}

export default actions
