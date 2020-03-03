import { incrementAction, decrementAction, multiplyAction, divideAction } from "./actions/counter.action";
import { counterReducer } from "./reducers/counter.reducer";


console.log(counterReducer(0, incrementAction))
console.log(counterReducer(0, decrementAction))
console.log(counterReducer(10, multiplyAction))
console.log(counterReducer(10, divideAction))
