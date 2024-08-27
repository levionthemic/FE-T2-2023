import { renderProducts } from "../helpers/renderProducts.js";

export const sort = (products, value) => {
  const Products = document.querySelector(".products");

  // deep copy
  let newProducts = JSON.parse(JSON.stringify(products));
  
  if (value == "price-asc") {
    newProducts.sort((prod1, prod2) => {
      return prod1.price - prod2.price
    });
  } else if (value == "price-desc") {
    newProducts.sort((prod1, prod2) => {
      return prod2.price - prod1.price
    });
  } else if (value == "discount-desc") {
    newProducts.sort((prod1, prod2) => {
      return prod2.discountPercentage - prod1.discountPercentage
    });
  } else {
    newProducts = products;
  }

  Products.innerHTML = renderProducts(newProducts);
};
