import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Product from "../Products/Products";
import { getAllProducts } from "../../redux/actions/actions";

const ProductList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.products);

  const { isLoading, productData } = list;

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div>
      {productData?.map((item, i) => {
        return <Product {...item} key={i} />;
      })}
    </div>
  );
};

export default ProductList;
