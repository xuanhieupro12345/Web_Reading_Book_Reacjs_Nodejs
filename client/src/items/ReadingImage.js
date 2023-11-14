import React from "react";

import image6 from "../images/bannerButton.jpg";
const ReadingImage = () => {
  return (
    <div>
      <div className="px-14 py-2 flex w-full justify-end items-center">
        <img src={image6} />
        <button className="bg-amber-400 h-8 w-32 text-xs rounded-full px-3 font-bold text-white absolute mr-24">
          ĐỌC NGAY{" "}
        </button>
      </div>
    </div>
  );
};

export default ReadingImage;
