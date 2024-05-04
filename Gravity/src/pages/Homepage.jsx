import Carousel from "../components/Carousel";
import { fetchGamesDb } from "../services/apiGames"; // Import the loader function
import Heading from "../components/Heading";
import BoxList from "../components/BoxList";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateGames } from "../slices/menuSlice";
import GameDetails from "../components/GameDetails";

function Homepage() {
  const games = useSelector((state) => state.menu.games);
  const dispatch = useDispatch();
  useEffect(() => {
    if (games.length > 0) return;
    const fetchGames = async () => {
      const data = await fetchGamesDb(100);
      dispatch(updateGames(data));
    };

    fetchGames();
  }, [dispatch, games.length]);

  if (!games || games.length === 0) return <Spinner />;

  return (
    <div className="h-full w-full m-r-auto py-12 px-8 bg-stone-900">
      <div className="flex bg-stone-900 mb-4">
        <Carousel />
        <GameDetails />
      </div>
      <Heading>Recent Releases</Heading>
      <BoxList size={8} />
      <Heading>Most Played</Heading>
      <BoxList size={8} />
    </div>
  );
}

export default Homepage;
