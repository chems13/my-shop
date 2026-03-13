import { products } from "../data/products";

function Products() {
  return (
    <>
      {products.map((product) => {
        console.log(product);
      })}

      <h1>Tous les produits</h1>
    </>
  );
}
export default Products;
