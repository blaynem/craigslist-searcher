import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions';

class ListItem extends Component {
	componentWillMount() {
		const { city, categoryId, pid, county } = this.props.match.params;
		this.props.fetchDetails(city, categoryId, pid, county);
	}

	render() {
		if (!this.props.details){
			return <div>Loading...</div>
		}

		const { pid, postedAt, replyUrl, title, url, description,updatedAt } = this.props.details;

		return (
			<div className="container">
				<div className="row">
					<p>{replyUrl}</p>
				</div>
				<div className="row">
					<p>{postedAt}</p>
					<p>{updatedAt}</p>
				</div>
				<div className="row">
					<h2>{title}</h2>
				</div>
				<div className="row">
					<h3>{description}</h3>
				</div>
				<p>{pid}</p>
				<p>{url}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { details: state.lists.list }
}

export default connect(mapStateToProps, { fetchDetails })(ListItem);