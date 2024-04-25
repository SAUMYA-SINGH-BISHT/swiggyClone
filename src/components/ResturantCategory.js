import { useState } from "react";
import IteamList from "./IteamList";

const ReturantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow-lg">
        {/* Header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-s">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* Body */}
        {showItem && <IteamList item={data.itemCards} show={true} />}
      </div>
    </div>
  );
};

export default ReturantCategory;
