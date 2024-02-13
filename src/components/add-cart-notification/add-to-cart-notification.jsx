import React, { useState } from "react";
import "./add-to-cart-notification.scss";

const AddToCartNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to show the notification
  const showNotification = () => {
    setIsVisible(true);
    // Hide the notification after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 9000);
  };

  return (
    <>

      {isVisible && (
        <div className="notification">
        <div className="add-to-cart-notification">
          <p>Item added to cart</p>
        </div>
        </div>
      )}
    </>
  );
};

export default AddToCartNotification;
