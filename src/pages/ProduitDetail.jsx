import { products } from "../data/products";
function ProduitDetail() {
  return (
    <>
      {products.map((product) => {
        console.log(product);
        return null;
      })}

      <p>ProduitDetail</p>
    </>
  );
}
export default ProduitDetail;
