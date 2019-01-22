import { combineReducers } from 'redux';
import messages from './messages/messages.reducer';

const rootReducer = combineReducers({
  messages,
});

export default rootReducer;
