import {
	createStore,
	applyMiddleware,
} from 'redux'

import rootReducer from 'reducer'

const thunk = (store) => (next) => (action) =>
	typeof action === 'function' ? action(store.dispatch, store.getState) : next(action)

export default (initialState) => {

	const middlewares = [thunk]
	const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))

	if (module.hot) {
		module.hot.accept('reducer', () => {
			const nextRootReducer = require('reducer');
			store.replaceReducer(nextRootReducer);
		});
	}

	return store
}
