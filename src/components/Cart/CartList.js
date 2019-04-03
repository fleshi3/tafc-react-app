import React, { Component } from "react";
import PropTypes from "prop-types";

class CartList extends Component {
  render() {
    const { title, price, quantity, subtotal } = this.props;
    return (
      <div className="cartListItem">
        {title} - &#36;{price} {quantity ? `x ${quantity}` : null} [{subtotal}]
      </div>
    );
  }
}

CartList.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  subtotal: PropTypes.number,
  title: PropTypes.string
};

export default CartList;
