import IAction from "../interfaces/action.interface"

const incrementAction: IAction = {
    type: 'INCREMENT',
}

const decrementAction: IAction = {
    type: 'DECREMENT',
}

const multiplyAction: IAction = {
    type: 'MULTIPLY',
    payload: 2,
}

const divideAction: IAction = {
    type: 'DIVIDE',
    payload: 2,
}

export {
    incrementAction,
    decrementAction,
    multiplyAction,
    divideAction
}