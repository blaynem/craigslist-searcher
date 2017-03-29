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
	renderLists() {
		return this.props.lists.map((list) => {
			return (
				<Link to={this.urlParams(list.url)} key={list.pid} className="lists">
					<li className="list-group-item col-sm-offset-1 col-sm-10">
						<div className="row">
							<p className="pull-xs-right">Posted {list.date}</p>
						</div>
						<div className="row">
							<h4>{list.title}</h4>
						</div>
					</li>
				</Link>
			)
		})
	}

	render() {
		return (
			<div className="row">
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