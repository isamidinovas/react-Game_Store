import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../utils";
import "./cart-block.css";
export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart); //отобразим наши игры в этом блоке
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    //оформление заказа
    setIsCartMenuVisible(false);
    navigate("/order"); //перенаправляет на страницу Order
  }, [navigate]);
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price"> {totalPrice}P</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
