import { useEffect } from "react";

export const useFilterData = (
  dataProduct,
  selectedCategory,
  setDataFiltered,
  setLoading
) => {
  useEffect(() => {
    if (!dataProduct) {
      return;
    }
    setLoading(true);
    const filterData = dataProduct?.filter((item) =>
      selectedCategory === null ? true : selectedCategory === item.category
    );
    setTimeout(() => {
      setDataFiltered(filterData);
      setLoading(false);
    }, 200);
  }, [dataProduct, selectedCategory, setDataFiltered, setLoading]);
};
