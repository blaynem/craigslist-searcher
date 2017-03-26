import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/index';


class Lists extends Component {
	// componentWillMount() {
	// 	this.props.fetchLists();
	// }
	renderLists() {
		return this.props.lists.map((list) => {
			return (
				<li className="list-group-item" key={list.pid}>
					<span className="pull-xs-right">{list.date}</span>
					<strong>{list.title}</strong>
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<h3>Items will be shown here on search</h3>
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