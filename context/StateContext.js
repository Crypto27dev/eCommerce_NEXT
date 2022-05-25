import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prvQty) => prvQty + 1);
  };
  const decQty = () => {
    setQty((prvQty) => {
      if (prvQty - 1 < 1) return 1;
      return prvQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItem,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
