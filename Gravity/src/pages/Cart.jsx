import { useSelector } from "react-redux";
import Heading from "../components/Heading";
import ListItem from "../components/ListItem";
function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="w-full h-screen bg-stone-900 flex items-center flex-col">
      <div className="w-1/2 bg-stone-900">
        <Heading>My Cart</Heading>
      </div>
      <div className="h-full w-1/2 mt-10">
        <ul className="divide-y divide-gray-200">
          {cart.map((item, index) => (
            <ListItem data={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
