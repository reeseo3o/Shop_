import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Nav() {
  const navigate = useNavigate();
  const cartleng = useSelector((store) => store.cartReducer);

  return (
    <nav className="Nav">
      <h1 className="nav-title" onClick={() => navigate("/")}>
        Hnm
      </h1>
      <i className="fas fa-shopping-cart" onClick={() => navigate("/cart")}>
        <span className="cart-amount">{cartleng.length}</span>
      </i>
    </nav>
  );
}
