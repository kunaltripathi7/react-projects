import { randomNumber } from "../Utils";
import Button from "./Button";
function ListItem({ data }) {
  return (
    <li className="flex justify-between items-center border-b border-gray-300 py-2">
      <div className="flex items-center">
        {data.background_image && (
          <img
            src={data.background_image}
            alt="logo"
            className="w-24 h-24 object-cover rounded mr-4"
          />
        )}
        <div className="flex gap-10">
          <span className="font-semibold text-stone-100 text-lg">
            {data.name}
          </span>
          <span className="text-stone-100 ml-2">{data.rating}⭐</span>
        </div>
      </div>
      <div className="text-stone-100 text-2xl">${randomNumber(20, 100)}</div>
    </li>
  );
}

export default ListItem;
