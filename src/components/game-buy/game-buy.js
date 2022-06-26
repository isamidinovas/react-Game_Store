import { type } from "@testing-library/user-event/dist/type";
import React from "react";

import { Button } from "../button";
import "./game-buy.css";

export const GameBuy = ({ game }) => {

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
