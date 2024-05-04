import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseIndex } from "../slices/menuSlice";
function Carousel() {
  const { games, index } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  useEffect(
    function () {
      const intervalId = setInterval(() => {
        dispatch(increaseIndex());
      }, 4000);
      return () => clearInterval(intervalId);
    },
    [dispatch]
  );

  return (
    <div
      className={`h-[450px] min-w-[900px] rounded-2xl bg-center bg-cover duration-500 group relative`}
      style={{ backgroundImage: `url("${games[index]?.background_image}")` }}
    ></div>
  );
}

export default Carousel;
