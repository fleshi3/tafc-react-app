import React, { Component } from "react";
import PropTypes from "prop-types";

class CartList extends Component {
  render() {
    const { title, price, quantity, subtotal, flavor } = this.props;
    return (
      <div className="cartListItem">
        <div>
          <b>Product:</b> {title} - {flavor}
        </div>
        <div>
          <b>Price:</b> &#36;{price} &emsp; &emsp; &emsp; &emsp; <b>Quantity:</b>{" "}
          {quantity ? `${quantity}` : null}
        </div>
        <div>
          <b>Subtotal:</b> ${subtotal}
        </div>
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
