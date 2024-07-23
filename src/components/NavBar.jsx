import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
export const NavBar = () => {
  const count = useSelector((state) => state.cart);

  return (
    <>
      <div className="navLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/cart" className="nav__cart">
          <FontAwesomeIcon icon={faCartShopping} />
          {count.length}
        </NavLink>
      </div>
    </>
  );
};
