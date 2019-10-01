import { applyMiddleware, createStore, compose } from 'redux';
// Locals
import reducers from '../reducers';

const store = createStore(
    reducers,

);

export default store;