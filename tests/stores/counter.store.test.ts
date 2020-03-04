import CounterStore from "../../stores/counter.store";
import { counterReducer } from "../../reducers/counter.reducer";
import { incrementAction, decrementAction, multiplyAction, divideAction, resetAction, defaultAction } from "../../actions/counter.action";

describe('counter store ', function() {

    test('get store', function() {
        const counterStore = new CounterStore(counterReducer, 1);
        expect(counterStore.state).toBe(1);    
    });

    test('dispatch increase', function() {
        const counterStore = new CounterStore(counterReducer, 1);
        counterStore.dispatch(incrementAction)
        expect(counterStore.state).toBe(2);  
    });

    test('dispatch decrease', function() {
        const counterStore = new CounterStore(counterReducer, 1);
        counterStore.dispatch(decrementAction)
        expect(counterStore.state).toBe(0);    
    })

    test('dispatch multiply', function() {
        const counterStore = new CounterStore(counterReducer, 5);
        counterStore.dispatch(multiplyAction)
        expect(counterStore.state).toBe(10);    
    })

    test('dispatch divide', function() {
        const counterStore = new CounterStore(counterReducer, 10);
        counterStore.dispatch(divideAction)
        expect(counterStore.state).toBe(5);    
    })
    test('dispatch reset', function() {
        const counterStore = new CounterStore(counterReducer, 1);
        counterStore.dispatch(resetAction)
        expect(counterStore.state).toBe(0);    
    })

    test('dispatch default', function() {
        const counterStore = new CounterStore(counterReducer, 1);
        counterStore.dispatch(defaultAction)
        expect(counterStore.state).toBe(1); 
    })

    test('dispatch sum 2 and multiply', function() {
        const counterStore = new CounterStore(counterReducer, 1);
        counterStore.dispatch(incrementAction)
        counterStore.dispatch(incrementAction)
        counterStore.dispatch(multiplyAction)
        expect(counterStore.state).toBe(6); 
    })

    test('dispatch sum 2 and multiply and reset', function() {
        const counterStore = new CounterStore(counterReducer, 1);
        counterStore.dispatch(incrementAction)
        counterStore.dispatch(incrementAction)
        counterStore.dispatch(multiplyAction)
        counterStore.dispatch(resetAction)
        expect(counterStore.state).toBe(0); 
    })


});