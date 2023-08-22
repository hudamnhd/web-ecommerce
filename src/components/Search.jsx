import { useState, useEffect, useContext, useRef } from "react";
import { AppContext } from "../context";
import { CgClose, CgSearch } from "react-icons/cg";

const AutocompleteSearchBox = () => {
  const {
    dataProduct,
    dataFiltered,
    setDataFiltered,
    setLoading,
    showSuggestion,
    setShowSuggestion,
  } = useContext(AppContext);
  const [query, setQuery] = useState("");
  const inputSuggestion = useRef(null);

  useEffect(() => {
    if (!dataProduct) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDataFiltered(
        dataProduct?.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 200);
  }, [query, dataProduct, setLoading, setDataFiltered]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowSuggestion(true);
  };

  const handleOptionClick = (option) => {
    setQuery(option);
    setShowSuggestion(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!inputSuggestion.current.contains(event.target)) {
        setShowSuggestion(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setShowSuggestion]);

  return (
    <div className="hidden xs:block w-full  relative" ref={inputSuggestion}>
      <form className="search_box">
        <input
          autoComplete="off"
          type="text"
          name="search"
          placeholder="Search for..."
          value={query}
          onChange={handleInputChange}
        />
        <CgSearch className="icon_search" />
        {query.length > 1 && (
          <CgClose
            role="button"
            onClick={() => setQuery("")}
            className="icon_clear"
          />
        )}
      </form>

      {showSuggestion &&
        (dataFiltered?.length > 1 ? (
          <div className="result_search_box">
            {dataFiltered?.map((product) => (
              <div
                key={product.id}
                className="result_product"
                onClick={() => handleOptionClick(product.title)}
              >
                {product.title}
              </div>
            ))}
          </div>
        ) : (
          <div className="search_result_empty">Nothing found</div>
        ))}
    </div>
  );
};

export default AutocompleteSearchBox;
