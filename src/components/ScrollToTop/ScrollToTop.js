import React from "react";

const ScrollToTop = () => {
  return (
    <div>
      <button
        type="button"
        className="scrollToTop"
        onClick={() => window.scrollTo(0, 850)}
      >
        ^
      </button>
    </div>
  );
};

export default ScrollToTop;
