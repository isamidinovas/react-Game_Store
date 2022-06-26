export const calcTotalPrice = (items) =>
  items.reduce((acc, game) => (acc += game.price), 0); //пройдемся по каждой игре и прибавим цену
