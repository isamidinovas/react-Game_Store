import React from "react";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { Button } from "../button";
import "./game-buy.css";

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation(); //останавливаем всплытие
    dispatch(setItemInCart(game));
  };
  return (
    <div className="game-buy">
      <span className="game-buy_price">{game.price}P</span>
      <Button type="primary" onClick={handleClick}>
        В крозину
      </Button>
    </div>
  );
};
