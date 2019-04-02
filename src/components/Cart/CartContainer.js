import React, { Component } from "react";
import { connect } from "react-redux";
import CartList from "./CartList";

class CartContainer extends Component {
  CartItems = (addedItems, addedItemsById) => (
    <CartList
      title={addedItems.title}
      price={addedItems.price}
      quantity={addedItems.quantity}
      key={addedItems.id}
    />
  );
  render() {
    const { addedItems } = this.props;
    const CartItems = addedItems.map(this.CartItems);
    return <div className="cartContainer">{CartItems}</div>;
  }
}

function mapStateToProps(state) {
  return {
    addedItems: state.cartReducer.addedItems,
    addedItemsById: {
      ...state.cartReducer.addedItemsById
    }
  };
}

export default connect(mapStateToProps)(CartContainer);
