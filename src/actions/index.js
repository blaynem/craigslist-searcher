import axios from 'axios';

export const FETCH_LISTS = 'FETCH_LISTS';
export const FETCH_DETAILS = 'FETCH_DETAILS';

// These are for searching the entire list
// need city argument
// can use: category, and searchTerm
const LIST_ROOT_URL = 'https://w4g2x8uob4.execute-api.us-west-2.amazonaws.com/prod/gigs?';
const searchCity = 'city='
const searchCategory = '&category='
const searchSearchTerm = '&searchTerm='

export function fetchLists(city, category, search) {
	// i should really clean this url up. Not sure how though.
	const request = axios.get(`${LIST_ROOT_URL}${searchCity}${city}${searchCategory}${category}${searchSearchTerm}${search}`);

	return {
		type: FETCH_LISTS,
		payload: request
	};
}

// These are for gathering details on a specific list
// needs all arguments, since the search is based off of a url
const DETAILS_ROOT_URL = 'https://w4g2x8uob4.execute-api.us-west-2.amazonaws.com/prod/details?';
const detailsCity = 'city=';
const detailsCounty ='&county=';
const detailsCategory = '&category=';
const detailsPID = '&urlnums=';

export function fetchDetails(city, category, pid, county) {
	const request = axios.get(`${DETAILS_ROOT_URL}${detailsCity}${city}${detailsCategory}${category}${detailsPID}${pid}${detailsCounty}${county}`);

	return {
		type: FETCH_DETAILS,
		payload: request
	};
}