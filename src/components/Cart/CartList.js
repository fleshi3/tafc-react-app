import React from "react";

const CartList = props => {
  const { title, price, quantity } = props;
  return (
    <div>
      {title} - &#36;{price} {quantity ? ` x ${quantity}` : null}
    </div>
  );
};

export default CartList;
