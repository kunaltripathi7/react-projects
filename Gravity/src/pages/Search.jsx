import Heading from "../components/Heading";
import Box from "../components/Box";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
function Search() {
  const results = useSelector((state) => state.menu.searchResults);

  if (!results || results.length === 0) return <Spinner />;
  return (
    <div className="bg-stone-900 h-full w-full pt-10 px-5">
      <Heading>Search Results</Heading>
      <div className="mt-10 grid grid-cols-5">
        {results.map((item) => (
          <Box game={item} />
        ))}
      </div>
    </div>
  );
}

export default Search;
