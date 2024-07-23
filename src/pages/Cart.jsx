import React from "react";
import { useSelector } from "react-redux";
import { Cards } from "../components/Cardss";
import { useDispatch } from "react-redux";
import { remove } from "../redux/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const handleClick = (data) => {
    dispatch(remove(data))
  };
  return (
    <>
      {cartProducts &&
        cartProducts.map((data, index) => (
          <Cards
            {...data}
            key={index}
            handleClick={() => handleClick(data)}
            ButtonName="Remove"
          />
        ))}
    </>
  );
};
