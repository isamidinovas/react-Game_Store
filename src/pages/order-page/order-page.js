import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../../components/order-item/order-item";
import { calcTotalPrice } from "../../components/utils";
import { ItemsInCart } from "../../components/items-in-cart";
import "./order-page.css";
export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (ItemsInCart.length < 1) {
    return <h1>Ваша корзина пуста</h1>;
  }
  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} товаров на сумму {calcTotalPrice(items)} p
          </span>
        </div>
      </div>
    </div>
  );
};
