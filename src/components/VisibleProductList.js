import { connect } from "react-redux";
import ProductList from "./ProductList";

const isSizeAvailable = (variants, size) => {
  let smalls = variants.filter(variant => variant.sizeData.value === size);
  return !!smalls.length;
};

const getVisibleProductItems = (products, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return products;
		case "SHOW_AVAILABLE":
			return products.filter(t => t.stock.stockLevel);
		case "SHOW_S":
			return products.filter(t => isSizeAvailable(t.variantOptions, 'S'))
		case "SHOW_M":
			return products.filter(t => isSizeAvailable(t.variantOptions, 'M'));
		case "SHOW_L":
			return products.filter(t => isSizeAvailable(t.variantOptions, 'L'));
		case "SHOW_XL":
			return products.filter(t => isSizeAvailable(t.variantOptions, 'XL'));
		case "SHOW_XXL":
			return products.filter(t => isSizeAvailable(t.variantOptions, 'XXL'));
		default:
			throw new Error("Unknown filter: " + filter);
	}
};

const mapStateToProps = state => ({
  products: getVisibleProductItems(state.products, state.visibilityFilter)
});

export default connect(mapStateToProps)(ProductList);
