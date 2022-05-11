import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/api/get");
    console.log(data);

    setProducts(data);
  };

    const fetchCategories= async()=>{
      const {data} = await axios.get("http://localhost:3000/api/categories_list")
      console.log(data)

      setCategories(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div>
      <Header></Header>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              <li className="pb-3">
                <ul className="collapse show list-unstyled pl-3">
                  {categories.map((row) => {
                            return( <li><a className="text-decoration-none nav-link" href="#"><NavLink className="text-decoration-none text-success" to={"/shop/category/" + row.id }>{row.category_name}</NavLink></a></li>)
                       
                        })}
                </ul>
              </li>

              {/* <li className="pb-3">
                <a
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="#"
                >
                  Sale
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
                <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sport
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Luxury
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li className="pb-3">
                <a
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="#"
                >
                  Product
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
                <ul id="collapseThree" className="collapse list-unstyled pl-3">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Bag
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sweather
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sunglass
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6">
                <h1 className="h2 pb-4">Top Selling Products</h1>
              </div>
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select className="form-control">
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Item</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              {products.map((row) => {
                return (
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div
                      class="card"
                      style={{ width: "20rem", height: "30rem" }}
                    >
                      <div class="bg-image ">
                        <img src={row.image} class="w-100" />
                        <a href="#!">
                          {/* <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-danger ms-2">-10%</span></h5>
                </div>
              </div> */}
                          <div class="hover-overlay">
                            <div
                              class="mask"
                              style={{
                                "background-color}":
                                  "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>

                      <div
                        class="card-body"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <a href="" class="text-reset text-decoration-none">
                          <h5 class="card-title mb-3">{row.name}</h5>
                        </a>
                        <a href="" class="text-reset text-decoration-none">
                          <p>{row.category_name}</p>
                        </a>
                        <h6 class="mb-3">
                          <span class="align-text-bottom">
                            <strong class="ms-2 text-success">
                              ${row.price}
                            </strong>
                          </span>
                        </h6>
                        {/* <s>$61.99</s> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div div="row">
              <ul className="pagination pagination-lg justify-content-end">
                <li className="page-item disabled">
                  <a
                    className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                    href="#"
                    tabindex="-1"
                  >
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                    href="#"
                  >
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
