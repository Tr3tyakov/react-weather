import { createStore, combineReducers, applyMiddleware } from 'redux';
import { DataReducer } from './DataReducer';
import { FetchReducer } from './FetchReducer';
import { HeaderReducer } from './HeaderReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  FetchReducer,
  HeaderReducer,
  DataReducer,
});

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
