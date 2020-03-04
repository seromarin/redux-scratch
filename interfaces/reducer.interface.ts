import IAction from "./action.interface";

export interface IReducer<T> {
    (state: T, action: IAction): T
}