import {Container} from 'dockerode'

export default class State {
    public color: string

    public containers: Array<Container>

    constructor() {
        this.color = 'blue'
        this.containers = []
    }
}
