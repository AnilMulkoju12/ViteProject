import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";
const Products = () => {
  const dispatch = useDispatch();
  function getAllProducts() {
    dispatch(fetchProducts());
  }
  useEffect(getAllProducts, []);
  const state = useSelector((state) => {
    return state.products.dataList;
  });
  return (
    <div>
      {state.map((p) => {
        console.log(p)
        return (
          <li key={p.id} style={{display:'flex',justifyContent:'center'}}>
            <div>{p.id}</div>
            <div>{p.title}</div>
          </li>
        );
      })}
    </div>
  );
};

export default Products;
