import { counterReducer } from "../../reducers/counter.reducer";

import { incrementAction, decrementAction, multiplyAction, divideAction, resetAction } from "../../actions/counter.action";

describe('counter', function() {

    test('increase 1', function() {
        let result = counterReducer(0, incrementAction);
        expect(result).toBe(1);    
    });

    test('decrease', function() {
        let result = counterReducer(1, decrementAction);
        expect(result).toBe(0);    
    })

    test('multiply', function() {
        let result = counterReducer(5, multiplyAction);
        expect(result).toBe(10);    
    })

    test('divide', function() {
        let result = counterReducer(10, divideAction);
        expect(result).toBe(5);    
    })
    test('reset', function() {
        let result = counterReducer(10, resetAction);
        expect(result).toBe(0);    
    })

    test('null', function() {
        let result = counterReducer(0, {
            type: 'NEGATIVE',
        });
        expect(result).toBe(0); 
    })
});