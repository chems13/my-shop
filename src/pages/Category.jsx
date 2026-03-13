import { categorie } from "../data/categories";

function Category() {
  return (
    <>
      <p>Category</p>

      {categorie.map((cat, index) => (
        <div
          key={index}
          className="card m-3 d-inline-block"
          style={{ width: "18rem" }}
        >
          <div className="card-body ">
            <h5 className="card-title">{cat.t}</h5>
            <p className="card-text">Categorie de chaque produits</p>
          </div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">{cat.id}</li>
            <li className="list-group-item">{cat.name}</li>
            <li className="list-group-item">{cat.icon}</li>
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
    </>
  );
}

export default Category;
