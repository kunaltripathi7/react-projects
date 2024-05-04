import { useSelector } from "react-redux";
import Heading from "./Heading";
import Spinner from "./Spinner";
import { fetchGamesInfo } from "../services/apiGames";
import { useEffect, useState } from "react";

function GameDetails() {
  const { index, games } = useSelector((state) => state.menu);
  const [currentGame, setCurrentGame] = useState({});
  useEffect(() => {
    const fetchGameDetails = async () => {
      const data = await fetchGamesInfo(games.at(index).id);
      setCurrentGame(data.data);
    };
    fetchGameDetails();
  }, [games, index]);

  if (!currentGame) return <Spinner />;
  return (
    <div className="w-full bg-stone-900 px-6 overflow-auto h-[450px] game-description-container">
      <style>
        {`
          .game-description-container {
            scrollbar-width: none; /* Hide the scrollbar for Firefox */
            -ms-overflow-style: none; /* Hide the scrollbar for IE and Edge */
            overflow-y: scroll; /* Enable vertical scrolling */
          }
          .game-description-container::-webkit-scrollbar {
            display: none; /* Hide the scrollbar for WebKit-based browsers */
          }
        `}
      </style>
      <Heading>{currentGame.name}</Heading>
      <div
        dangerouslySetInnerHTML={{ __html: currentGame.description }}
        className="text-stone-300 text-lg mt-4 h-full"
      />
    </div>
  );
}

export default GameDetails;
