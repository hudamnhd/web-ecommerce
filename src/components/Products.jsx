import { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { Card, Modal, Loading } from "../components";
import { fetchData, useFilterData } from "../utils";

const Products = () => {
  const {
    dataProduct,
    loading,
    cartItem,
    setCartItem,
    dataFiltered,
    selectedItem,
    setSelectedItem,
    categories,
    selectedCategory,
    setSelectedCategory,
    setLoading,
    setDataProduct,
    setDataFiltered,
  } = useContext(AppContext);

  useFilterData(dataProduct, selectedCategory, setDataFiltered, setLoading);
  console.log(selectedItem);
  useEffect(() => {
    fetchData(setDataProduct);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {dataFiltered && (
        <div className="inline md:hidden flex flex-wrap items-center justify-center  gap-x-5  px-2 mb-5">
          <button
            onClick={() => setSelectedCategory("")}
            className={`${
              selectedCategory === null ? "text-sky-500" : null
            } categories_text`}
          >
            All Category
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category ? "text-sky-500" : null
              } categories_text`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center  px-3 xs:px-10 mt-5 mb-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-700">
          New Arrivals
        </h2>
        <div className="flex items-center gap-x-3">
          <label
            htmlFor="HeadlineAct"
            className="hidden block text-sm font-medium text-gray-900"
          >
            Filter
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="hidden capitalize  w-full py-1.5 outline-none rounded-md px-2 text-gray-700"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option
                value={category}
                className={`${
                  selectedCategory === category ? "text-sky-500" : null
                } `}
              >
                {category}
              </option>
            ))}
            <option></option>
          </select>
        </div>
      </div>

      {(!dataFiltered || loading) && <Loading />}
      {dataFiltered?.length === 0 && (
        <div className="product_notfound">Nothing found.</div>
      )}

      {dataFiltered?.length > 0 && (
        <section className="product_container">
          {dataFiltered?.map((item) => (
            <Card
              key={item.id}
              item={item}
              setSelectedItem={setSelectedItem}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />
          ))}
        </section>
      )}

      <Modal
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
    </>
  );
};

export default Products;
