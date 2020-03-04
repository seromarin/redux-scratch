import { Store, createStore } from 'redux';
import { counterReducer } from './reducers/counter.reducer';
import { incrementAction } from './actions/counter.action';

const store: Store = createStore(counterReducer)

store.subscribe(() => console.log('Subs: ', store.getState()))

store.dispatch(incrementAction)
