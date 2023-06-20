export const fetchData = async (setDataProduct) => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/hudamnhd/web-ecommerce/main/products.json"
    );
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
