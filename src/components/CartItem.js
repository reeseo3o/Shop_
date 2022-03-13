import React from "react";
import "./CartItem.css";
import { deleteCart } from "../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartReducer);
  console.log(cart);
  const items = cart.filter((value, index, array) => {
    if (value.id != props.item.id) return true;
    else return false;
  });

  return (
    <div className='cart-item'>
      <img className='cart-item-img' src={props.item.product_img} />
      <span className='cart-item-name'>{props.item.product_name}</span>
      <span className='cart-item-price'>{props.item.price}</span>
      <i
        className='fas fa-trash-alt'
        onClick={() => {
          dispatch(deleteCart(items));
        }}
      ></i>
    </div>
  );
}
