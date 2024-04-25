import { useDispatch, useSelector } from "react-redux";
import IteamList from "./IteamList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const item = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-7/12 m-auto">
        <button
          className="p-2 m-2 bg-slate-300 text-black rounded-lg"
          onClick={clear}
        >
          Clear Cart
        </button>
        {item.length === 0 && <h1> Cart is Empty !! Please add ---</h1>}
        <IteamList item={item} show={false} />
      </div>
    </div>
  );
};
export default Cart;
