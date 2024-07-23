import React, { useEffect } from "react";
import { Cards } from "../components/Cardss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../redux/productSlice";
import { add } from "../redux/cartSlice";

export const Home = () => {
  const { data, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleClick = (data) => {
    console.log("Add To Cart", data);
    dispatch(add(data));
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <div className="card__grid">
        {data &&
          data.map((data, index) => (
            <Cards
              {...data}
              key={index}
              handleClick={() => handleClick(data)}
              ButtonName="Add To Cart"
            />
          ))}
      </div>
    </>
  );
};
