import React from "react";
import "../styles/style.css";

class Products extends React.Component {
  state = {
    searchTerm: "",
  };
  onAdd = (product) => {
    
    this.props.addToCart(product);
  };
  render() {
    const filteredProducts = this.props.products.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
    });

    return (
      <div className="container-fluid">
        <div className="my-3">
          <label htmlFor="search" className="form-label">
            Search
          </label>
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="T shirt"
            value={this.state.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          />
        </div>
        <div className="conatianer-fluid mx-0 my-3">
            <div className="row g-2">
                {filteredProducts.map(product => {
                     const { url, name, price, id } = product;
                    return  <div
                    className="col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2 rounded-2"
                    key={id}
                    >
                             <div className="card h-100 ">
                                <div className="box-img">
                                <img src={url} alt={name} className="product-img" />
                                </div>
                                <div className="card-body">
                                <h5 className="card-title fw-bold">{name}</h5>
                                <p className="card-text">Price: {price} Lei</p>
                                <p>{id}</p>
                                <div className="row">
                                    <div className="col align-self-end">
                                    <button
                                        type="button"
                                        className="order-btn"
                                        onClick={() => this.onAdd(product)}
                                    >
                                    
                                        Comanda
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                         </div>
                })}
            </div>
        </div>

      </div>
    );
  }
}
export default Products;
