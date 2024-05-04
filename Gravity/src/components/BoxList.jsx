import { useSelector } from "react-redux";
import Box from "./Box";
import { randomNumber } from "../Utils";

function BoxList({ size }) {
  let games = useSelector((state) => state.menu.games); // use get selector instead
  const random = randomNumber(0, games.length - size);
  games = games.slice(random, random + size - 1);
  return (
    <div className="flex gap-6 h-64 my-6">
      {games.map((obj) => (
        <Box game={obj} key={obj.id} />
      ))}
    </div>
  );
}

export default BoxList;
