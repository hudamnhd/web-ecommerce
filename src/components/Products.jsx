import { useContext, useEffect } from "react";
import { fetchData, useFilterData } from "../utils";
import { AppContext } from "../context";
import { Card, Modal } from "../components";
import { Listbox } from "@headlessui/react";

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

  const lodingSkelton = Array.from({ length: 6 }, (_, index) => (
    <div
      key={index}
      role="status"
      className=" p-3 border border-gray-200 rounded shadow animate-pulse dark:border-gray-700"
    >
      <div className="flex items-center justify-center h-36 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="flex items-center mt-4 space-x-3">
        <div className="w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div className=" h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  ));

  return (
    <>
      <div className="flex flex-wrap gap-y-2 justify-between items-center  px-3 xs:px-10 mt-5 mb-4">
        <h2 className="text-2xl font-bold tracking-tight">New Arrivals</h2>
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
          {({ open }) => (
            <div className="relative  min-w-[170px] max-w-[300px]">
              <Listbox.Button className="w-full flex justify-between cursor-pointer items-center gap-5 border-b pb-1 mt-1 sm:mt-0 border-gray-400 transition hover:border-gray-600">
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
              <Listbox.Options className="absolute  z-30 mt-2 max-h-56 w-full overflow-auto rounded-sm text-base shadow-lg ring-1 ring-gray-300 focus:outline-none sm:text-sm">
                <Listbox.Option value={null}>
                  {({ active }) => (
                    <li
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : " bg-white text-black"
                      }  pl-3 p-1.5 capitalize`}
                    >
                      All Category{" "}
                    </li>
                  )}
                </Listbox.Option>

                {categories.map((category) => (
                  /* Use the `active` state to conditionally style the active option. */
                  /* Use the `selected` state to conditionally style the selected option. */
                  <Listbox.Option key={category} value={category}>
                    {({ active }) => (
                      <li
                        className={`${
                          active
                            ? "bg-blue-500 text-white"
                            : " text-black bg-white"
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

      {(!dataFiltered || loading) && (
        <div className="grid grid-cols-2 ss:grid-cols-3  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 px-3 xs:px-10 mb-5">
          {lodingSkelton}
        </div>
      )}
      {dataFiltered?.length === 0 && (
        <div className="product_notfound">Nothing found.</div>
      )}

      {dataFiltered?.length > 0 && !loading && (
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
