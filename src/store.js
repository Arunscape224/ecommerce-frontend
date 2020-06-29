import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/root.reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [logger, thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))