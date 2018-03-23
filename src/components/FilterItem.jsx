import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setVisibilityFilter } from './../actions/actions.js'



class FilterItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children, onClick } = this.props
		return (
			<li onClick={onClick} className='filter-item'>
				<input type="checkbox" name="name"/>
				{children}
			</li>
		)
	}
}

export default FilterItem
