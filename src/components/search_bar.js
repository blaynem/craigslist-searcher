import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLists } from '../actions';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		// change citySelect/categorySelect value based on whatever the first selecter is
		// otherwise if the user does not change their selection, the value will be undefined
		this.state = { term: '', citySelect: 'Miami', categorySelect: 'ggg'};
		this.onInputChange = this.onInputChange.bind(this);
		this.onCitySelect = this.onCitySelect.bind(this);
		this.onCategorySelect = this.onCategorySelect.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}

	// this sets the state of the search term on change
	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	// this sets the state of the category select
	onCategorySelect(event) {
		this.setState({ categorySelect: event.target.value });
	}

	// this sets the state of the city selector
	onCitySelect(event) {
		this.setState({ citySelect: event.target.value });
	}

	// this will submit the search for whatever term, city, and category the user wants
	// it will set the state of the term back to its original blank, but keep the category and city
	// what the value is they searched with, i feel it's more user friendly
	onSearchSubmit(event) {
		event.preventDefault();

		const { citySelect, categorySelect, term } = this.state;
		// console.log(this.state.term, this.state.citySelect, this.state.categorySelect);
		this.props.fetchLists(citySelect, categorySelect, term);
		// this sets the search bar back to blank, to show the user they actually searched for something
		this.setState({ term: '' });
	}

	// will need to refactor in all available cities and categories later, to make it look more pretty
	render() {
		return (
			<form onSubmit={this.onSearchSubmit} className="input-group">
				<select 
					className="form-control"
					value={this.state.citySelect}
					onChange={this.onCitySelect} >
					<option value="Miami">Miami</option>
					<option value="Denver">Denver</option>
					<option value="Portland">Portland</option>
				</select>

				<select
					className="form-control"
					value={this.state.categorySelect}
					onChange={this.onCategorySelect} >
					<option value="ggg">gigs</option>
					<option value="sss">for sale</option>
					<option value="jjj">jobs</option>
				</select>

				<input 
					placeholder="search term"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
					/>

				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchLists }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);