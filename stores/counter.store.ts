import { IReducer } from "../interfaces/reducer.interface";
import { counterReducer } from "../reducers/counter.reducer";
import IAction from "../interfaces/action.interface";

export default class CounterStore<T> {
    constructor(private _reducer: IReducer<T>, private _state: T) { }

    get state() {
        return this._state;
    }

    dispatch(action: IAction) {
        this._state = this._reducer(this._state, action)
    }
}

// const store = new CounterStore(counterReducer, 10)