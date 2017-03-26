import { FETCH_LISTS } from '../actions/index';

const INITIAL_STATE = { all: [], list: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_LISTS:
			return { ...state, all: action.payload.data };
		default:
			return state;
	}
}