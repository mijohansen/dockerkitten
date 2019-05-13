import {GetterTree} from 'vuex'

import State from './state'
import {Container} from 'dockerode'

// GetterTree<[current state], [root state]>
const getters: GetterTree<State, State> = {
    /*
     * It's just color with new name.
     * Example for using getters.
     */
    colour(state: State): string {
        return state.color
    },
    container(state: State, id: string): Container | undefined {
        return state.containers.find((container: Container) => container.id === id)
    },
    containers(state: State): Array<Container> {
        return state.containers
    },
}

export default getters
