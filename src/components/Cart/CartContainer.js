import React, { Component } from "react";
import { connect } from "react-redux";
import CartList from "./CartList";

function mapStateToProps(state) {
  return {
    addedItems: state.cartReducer.addedItems,
    addedItemsById: {
      ...state.cartReducer.addedItemsById
    },
    total: state.cartReducer.total,
    totalCost: state.cartReducer.totalCost
  };
}

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      showCart: !prevState.showCart
    }));
  };

  render() {
    const { addedItems, addedItemsById, total, totalCost } = this.props;
    const { showCart } = this.state;
    const hasItems = addedItems.length > 0;
    const cart = !hasItems ? (
      <small>The cart is currently empty. Please select items to order.</small>
    ) : (
      addedItems.map(item => (
        <CartList
          title={item.title}
          price={item.price}
          quantity={addedItemsById[item.id]}
          subtotal={item.price * addedItemsById[item.id]}
          key={item.id}
          flavor={item.flavor}
        />
      ))
    );
    const cartTotal = totalCost.toFixed(2);
    return (
      <div>
        <div
          className="cartContainer"
          style={{ transform: showCart ? "translate3d(0,0,0)" : "" }}
        >
          <span className="Pacifico">Cart</span>
          <div className="cartItemContainer">{cart}</div>
          <div className="cartTotal">
            <span className="Pacifico">Total</span>
            <div>${cartTotal}</div>
          </div>
        </div>
        <div className="showCart">
          <button type="button" onClick={this.handleClick}>
            CART {total}
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartContainer);
