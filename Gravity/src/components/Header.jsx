import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchGames } from "../services/apiGames";
import { updateSearchResults } from "../slices/menuSlice";
function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.menu.user);
  async function handleSubmit(e) {
    e.preventDefault();
    const data = await searchGames(query);
    dispatch(updateSearchResults(data));
    navigate("/search");
  }
  return (
    <div className="bg-stone-900 flex items-center justify-between ">
      <Button type="logo" to="/home">
        Gravity
      </Button>
      <form onSubmit={handleSubmit}>
        <input
          className="w-60 h-7 px-1"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="text-stone-100 flex gap-7 mr-12">
        <h1 className="text-xl pt-1">Hello, {username}</h1>
        <Button to="/cart" type="primary">
          Cart
        </Button>
      </div>
    </div>
  );
}

export default Header;
