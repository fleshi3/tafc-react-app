import { connect } from "react-redux";
import { setSortFilter } from "../../actions/index";
import SortButton from "./SortButton";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.sortFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setSortFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortButton);
