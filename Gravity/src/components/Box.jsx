import { useDispatch } from "react-redux";
import Button from "./Button";
import { addToCart, removeItem } from "../slices/CartSlice";
import { useState } from "react";
function Box({ game }) {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);
  return (
    <div className="rounded-xl flex flex-col items-center justify-between h-full w-52">
      <img src={game.background_image} className="h-44 w-full" alt="game" />
      <h2 className="text-xl font-semibold my-4  text-stone-300">
        {game.name}
      </h2>
      {/* <button className="text-white px-6 py-2 rounded hover:bg-stone-600 mb-4">
        Add to Cart
      </button> */}
      <Button
        type="secondary"
        onClick={() => {
          if (setInCart) dispatch(removeItem(game.id));
          setInCart((inCart) => !inCart);
          dispatch(addToCart(game));
        }}
      >
        {!inCart ? "Add to Cart ➕" : "Remove ➖"}
      </Button>
      <p className="text-base font-bold text-stone-200 mt-1">
        Rating: {game.rating}
      </p>
    </div>
  );
}

export default Box;
