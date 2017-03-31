import { FETCH_LISTS, FETCH_DETAILS, CLEAR_DATA } from '../actions/index';

const INITIAL_STATE = { all: [], list: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_LISTS:
			return { ...state, all: action.payload.data };
		case FETCH_DETAILS:
			return { ...state, list: action.payload.data };
		case CLEAR_DATA:
			return { ...state, list: null }
		default:
			return state;
	}
}