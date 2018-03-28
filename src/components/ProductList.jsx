import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

class ProductList extends Component {
	render() {
		const rows = [];
		
		this.props.products.forEach((product) => {
			rows.push(
				<ProductItem
					product={product}
					key={product.name} />
			);
		});

		return (
			<div className='lister'>
				<ul className='lister_inner'>{rows}</ul>
			</div>
		);
	  }
}

export default ProductList
