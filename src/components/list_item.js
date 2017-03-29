import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions';
import { Link } from 'react-router-dom';

class ListItem extends Component {
	componentWillMount() {
		const { city, categoryId, pid, county } = this.props.match.params;
		this.props.fetchDetails(city, categoryId, pid, county);
	}

	// Just trying to make the description read a little more cleanly.
	renderCleanDescription(e){
		return e.split(". ").map((item, i) => {return <h3 key={i}>{item}.</h3>})
	}

	render() {
		if (!this.props.details){
			return <div>Loading...</div>
		}

		const { pid, postedAt, replyUrl, title, url, description,updatedAt } = this.props.details;

		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 replyUrl">
						<span>Reply Here: </span>
						<Link to={replyUrl}>{replyUrl}</Link>
					</div>
					<div className="col-sm-6 posteds">
						<p><span>Last Updated:</span> {updatedAt}</p>
						<p><span>Originally Posted:</span> {postedAt}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 titles">
						<h2>{title}</h2>
					</div>
					<div className="col-sm-12 descriptions">
						{this.renderCleanDescription(description)}
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 urlLink">
						<Link to={url}><p>{url}</p></Link>
					</div>
					<div className="col-sm-6 postId">
						<p><span>Post Id:</span> {pid}</p>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { details: state.lists.list }
}

export default connect(mapStateToProps, { fetchDetails })(ListItem);