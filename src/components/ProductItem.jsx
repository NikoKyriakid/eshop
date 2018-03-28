import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.imageURL = this.props.product.thumbnail.replace('thumbnail', 'medium');
        this.imageURL2 = this.imageURL.replace(/(\S*)(\/\d*_)(\d)(_\S*\.jpg)/, "$1$22$4");

        this.state = {
            img: this.imageURL
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        this.setState({ img : this.imageURL2 });
    }

    handleMouseOut() {
        this.setState({ img : this.imageURL });
    }

    render() {
        const product = this.props.product;

        // In order to find the name of the designer as it wasn't in the JSON
        // I had to grab the url remove the dashes and the name of the product from the url string.
        const title = product.url.slice(0,product.url.indexOf('-' + product.name.replace(/ /g, '-'))).replace('/products/', '').replace('-', ' ');
        const price = product.priceData.formattedValue;

        return (
            <li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} className="lister_item">
                <div className="lister_item_inner">
	                <div className="lister_item_image productView">
                        <a href={product.link}>
                            <img className="lazy" src={this.state.img}/>
                        </a>
		            </div>

                    <a href={product.link} title={product.name} className="productMainLink caption">
                        <div className="lister_item_title">{title}</div>
                        <div className="lister_item_details">{product.name}</div>
                        <div className="lister_item_price">
                            <span className="lister_item_price-full">{price}</span>
                        </div>
                    </a>
                </div>
            </li>
        );
    }
}

export default ProductItem