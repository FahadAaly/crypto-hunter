import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

export const CryptopContext = ({ children }) => {
  const [currency, setCurrency] = useState("PKR");
  const [symbol, setSymbol] = useState("₨");

  useEffect(() => {
    if (currency === "PKR") setSymbol("₨");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);
  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export const CryptoState = () => {
  return useContext(Crypto);
};
