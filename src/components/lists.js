import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions';
import { Link } from 'react-router-dom';


class Lists extends Component {
	renderLists() {
		return this.props.lists.map((list) => {
			return (
				<Link to={"/lists/" + list.pid} key={list.pid} >
					<li className="list-group-item">
						<span className="pull-xs-right">{list.date}</span>
						<strong>{list.title}</strong>
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