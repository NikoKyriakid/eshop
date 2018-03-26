import React, { Component } from 'react';

import VisibleProductList from './VisibleProductList'
import Filter from './Filter'
import 'normalize.css';
import './App.css';



class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { products } = this.props;
		return (
			<div>
				<Filter />
				<VisibleProductList products={products}/>
			</div>
		)
	}
}

export default App;