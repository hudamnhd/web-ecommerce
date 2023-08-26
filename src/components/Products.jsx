import { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { Card, Modal, Loading } from "../components";
import { fetchData, useFilterData } from "../utils";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];
const Products = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
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
      <div className="flex flex-wrap gap-y-2 justify-between items-center  px-3 xs:px-10 mt-5 mb-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-700">
          New Arrivals
        </h2>
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
          {({ open }) => (
            <div className="relative  min-w-[170px] max-w-[300px]">
              <Listbox.Button className="w-full flex justify-between cursor-pointer items-center gap-5 border-b pb-1 mt-1 sm:mt-0 border-gray-400  text-gray-900 transition hover:border-gray-600">
                {}
                <span className="text-sm font-medium capitalize">
                  {selectedCategory ? selectedCategory : "All Category"}
                </span>

                <span className={`transition ${open ? "-rotate-180" : ""}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute  z-30 mt-2 max-h-56 w-full overflow-auto rounded-sm  bg-white py-1 text-base shadow-lg ring-1 ring-gray-300 focus:outline-none sm:text-sm">
                <Listbox.Option value={null}>
                  {({ active, selected }) => (
                    <li
                      className={`${
                        active ? "bg-sky-500 text-white" : "bg-white text-black"
                      }  pl-3 p-1.5`}
                    >
                      All Category{" "}
                    </li>
                  )}
                </Listbox.Option>

                {categories.map((category) => (
                  /* Use the `active` state to conditionally style the active option. */
                  /* Use the `selected` state to conditionally style the selected option. */
                  <Listbox.Option key={category} value={category}>
                    {({ active, selected }) => (
                      <li
                        className={`${
                          active
                            ? "bg-sky-500 text-white"
                            : "bg-white text-black"
                        }  pl-3 p-1.5 capitalize`}
                      >
                        {category}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          )}
        </Listbox>
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
