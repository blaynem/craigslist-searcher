import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchListItem } from '../actions'
import { match } from 'react-router';

class ListItem extends Component {

	render() {
		// const { match } = this.props;
		return (
			<div>
				<h2>{JSON.stringify(this.props.match)}</h2>
			</div>
		)
	}
}


export default ListItem;