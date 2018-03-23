import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const product = this.props.product;
        const imageURL = product.thumbnail.replace('thumbnail', 'medium');
        
        const title = product.url.slice(0,product.url.indexOf('-' + product.name.replace(/ /g, '-'))).replace('/products/', '').replace('-', ' ');
        const price = product.priceData.formattedValue;

        return (
            <li className="lister__item">
                <div className="lister__item__inner">
	                <div className="lister__item__image productView">
                        <a href={product.link}>
                            <img className="lazy" src={imageURL}/>
                        </a>
		            </div>

                    <a href={product.link} title={product.name} className="productMainLink caption">
                        <div className="lister__item__title">{title}</div>
                        <div className="lister__item__details">{product.name}</div>
                        <div className="lister__item__price">
                            <span className="lister__item__price-full">{price}</span>
                        </div>
                    </a>
                </div>
            </li>
        );
    }
}

export default ProductItem