export const fetchData = async (setDataProduct) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=18");
    const data = await response.json();
    const processData = data.map((item) => ({
      ...item,
      priceIDR: Math.floor(item.price * 14875),
    }));
    setDataProduct(processData);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
