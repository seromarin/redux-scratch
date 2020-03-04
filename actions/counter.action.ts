import IAction from "../interfaces/action.interface"

export const incrementAction: IAction = {
    type: 'INCREMENT',
}

export const decrementAction: IAction = {
    type: 'DECREMENT',
}

export const multiplyAction: IAction = {
    type: 'MULTIPLY',
    payload: 2,
}

export const divideAction: IAction = {
    type: 'DIVIDE',
    payload: 2,
}

export const resetAction: IAction = {
    type: 'RESET',
}

export const defaultAction: IAction = {
    type: 'DEFAULT',
}

// export {
//     incrementAction,
//     decrementAction,
//     multiplyAction,
//     divideAction,
//     resetAction
// }