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

		const { pid, postedAt, replyUrl, title, url } = this.props.details;

		return (
			<div>
				<p>{pid}</p>
				<p>{postedAt}</p>
				<p>{replyUrl}</p>
				<p>{title}</p>
				<p>{url}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { details: state.lists.list }
}

export default connect(mapStateToProps, { fetchDetails })(ListItem);