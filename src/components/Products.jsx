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

  useEffect(() => {
    fetchData(setDataProduct);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {dataFiltered && (
        <div className="categories_menu">
          <button
            onClick={() => setSelectedCategory(null)}
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

      {selectedItem && (
        <Modal
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          cartItem={cartItem}
          setCartItem={setCartItem}
        />
      )}
    </>
  );
};

export default Products;
