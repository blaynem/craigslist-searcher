import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions';
import { Link } from 'react-router-dom';
import { getUrlParams } from '../functions/get_url';

class Lists extends Component {

	// this function takes in a url, and depending on if it has a county code or not
	// will return that url
	urlParams(listingUrl) {
		// this calls the function getUrlParams which just parses the specific url into
		// 4 parts, the city, county code, category code, and PID
		const urlParams = getUrlParams(listingUrl);

		// basically just saying depending on if the county code is present, pass a certain url
		if (urlParams[1] === null){
			return `/lists/${urlParams[0]}/${urlParams[2]}/${urlParams[3]}`
		} else {
			return `/lists/${urlParams[0]}/${urlParams[2]}/${urlParams[3]}/${urlParams[1]}`
		}
	}

	// maps through all the data gathered from the craigslist site and then places it in
	// a prettier and more functional view
	// renderLists() {
	// 	return this.props.lists.map((list) => {
	// 		return (
	// 			<Link to={this.urlParams(list.url)} key={list.pid} >
	// 				<li className="list-group-item">
	// 					<span className="pull-xs-right">{list.date}</span>
	// 					<strong>{list.title}</strong>
	// 				</li>
	// 			</Link>
	// 		)
	// 	})
	// }

	//here to test look of app
	renderLists() {
		return ["1", "2", "3"].map((list) => {
			return (
				<Link to="test" key={list} >
					<li className="list-group-item">
						<span className="pull-xs-right">12/06/2017</span>
						<strong>This is a title tester yes sir.</strong>
					</li>
				</Link>
			)
		})
	}

	render() {
		return (
			<div>
				<ul className="list-group">
					{this.renderLists()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { lists: state.lists.all }
}

export default connect(mapStateToProps, { fetchLists })(Lists);