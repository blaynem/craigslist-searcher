import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions';
import { Link } from 'react-router-dom';
import { getUrlParams } from '../functions/get_url';

class Lists extends Component {

	// these are basically the exact same code, aside from the ending having a county code or not
	// should probably refactor it...
	// okay, im refactoring it.
	renderLists() {
		return this.props.lists.map((list) => {
			const urlParams = getUrlParams(list.url);
			if (urlParams[1] === null) {
				return (
					<Link to={`/lists/${urlParams[0]}/${urlParams[2]}/${urlParams[3]}`} key={list.pid} >
						<li className="list-group-item">
							<span className="pull-xs-right">{list.date}</span>
							<strong>{list.title}</strong>
						</li>
					</Link>
				)
			} else {
				return (
					<Link to={`/lists/${urlParams[0]}/${urlParams[2]}/${urlParams[3]}/${urlParams[1]}`} key={list.pid} >
						<li className="list-group-item">
							<span className="pull-xs-right">{list.date}</span>
							<strong>{list.title}</strong>
						</li>
					</Link>
				)
			}
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