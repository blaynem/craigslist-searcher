import axios from 'axios';

export const FETCH_LISTS = 'FETCH_LISTS';

// need city argument
// can use: category, and searchTerm
const ROOT_URL = 'https://w4g2x8uob4.execute-api.us-west-2.amazonaws.com/prod/gigs?';
const searchCity = 'city='
const searchCategory = '&category='
const searchSearchTerm = '&searchTerm='

export function fetchLists(city, category, search) {
	// i should really clean this url up. Not sure how though.
	const request = axios.get(`${ROOT_URL}${searchCity}${city}${searchCategory}${category}${searchSearchTerm}${search}`);

	return {
		type: FETCH_LISTS,
		payload: request
	};
}