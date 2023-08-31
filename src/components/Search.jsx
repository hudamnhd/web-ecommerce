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
    <div className="w-full relative" ref={inputSuggestion}>
      <input
        type="search"
        className="w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-300 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
      <svg
        className="h-6 w-6 text-gray-400 ml-2 mt-2 stroke-current absolute top-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <form className="hidden">
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
