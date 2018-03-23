import { connect } from "react-redux";
import { setVisibilityFilter } from "./../actions/actions.js";
import FilterItem from "./FilterItem";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
