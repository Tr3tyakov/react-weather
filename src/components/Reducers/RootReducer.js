import { createStore, combineReducers, applyMiddleware } from 'redux';
import { DataReducer } from './DataReducer';
import { FetchReducer } from './FetchReducer';
import { CityReducer } from './CityReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  FetchReducer,
  CityReducer,
  DataReducer,
});

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
