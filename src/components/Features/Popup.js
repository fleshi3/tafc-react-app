import React from "react";

const Popup = props => {
  const { handlePopup } = props;
  return (
    <div className="popup">
      <div className="popupInner">
        <h3 className="popupBrand">t.a.f.c</h3>
        <b className="popupMessage">"have a promo code on the house"</b>
        <p className="popupOffer">take 10% off of your next order</p>
        <small>on orders of $15 or more</small>
        <div>
          <input type="text" placeholder="enter email" />
          <div>
            <button type="button" onClick={handlePopup}>
              claim now
            </button>
            <button type="button" onClick={handlePopup}>
              close popup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
