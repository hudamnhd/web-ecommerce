import { createContext, useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const [dataProduct, setDataProduct] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dataFiltered, setDataFiltered] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const categories = Array.from(
    new Set(dataProduct?.map((item) => item.category))
  );

  return (
    <AppContext.Provider
      value={{
        toggle,
        setToggle,
        active,
        setActive,
        dataProduct,
        setDataProduct,
        cartItem,
        setCartItem,
        selectedCategory,
        setSelectedCategory,
        dataFiltered,
        setDataFiltered,
        loading,
        setLoading,
        selectedItem,
        setSelectedItem,
        showSuggestion,
        setShowSuggestion,
        isMouseOver,
        setIsMouseOver,
        categories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
