import { product } from "../data/products";

function Products() {
  return (
    <>
      <h1>Tous les produits</h1>
      <div className="container d-flex flex-wrap m-3 gap-5">
        {product.map((p, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={p.image} alt={p.name} />
            <div className="card-body">
              <h5 className="card-title">{p.category}</h5>
              <p className="card-text">{p.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{p.price}</li>
              <li className="list-group-item">{p.rating}</li>
              <li className="list-group-item">{p.stock}</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Products;
