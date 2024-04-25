import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const IteamList = ({ item, show }) => {
  const dispatch = useDispatch();

  const handleAddItem = (val) => {
    dispatch(addItem(val));
  };
  console.log(show);
  return (
    <div>
      {item.map((val) => (
        <div
          key={val.card.info.id}
          className="m-2 p-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{val.card.info.name}</span>
              <span>
                - ₹
                {val.card.info.price || val.card.defaultPrice
                  ? val.card.info.price / 100
                  : val.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{val.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute m-6">
              {show && (
                <button
                  className="py-1 bg-black text-white mx-5 rounded-lg shadow-lg"
                  onClick={() => handleAddItem(val)}
                >
                  Add +
                </button>
              )}
            </div>
            <img src={CDN_URL + val.card.info.imageId} className="w-full"></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default IteamList;
