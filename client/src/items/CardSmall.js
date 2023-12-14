import React from "react";

const CardSmall = ({ imageBook, nameBook, publishing, author }) => {
  return (
    <div>
      <div className="w-full h-[260px] flex min-w-[230px] max-w-[230px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer">
        <div>
          <div className="text-start w-full">
            <img
              src={imageBook} // Use imageBook prop here
              className="h-36 bg-contain w-full object-cover"
            />
          </div>
          <p className="text-start w-[200px] text-green-300 text-xl mt-2 font-bold whitespace-nowrap overflow-hidden">
            {nameBook}
          </p>
          <p className="text-start font-semibold text-slate-600 w-[200px] capitalize text-sm mt-2 whitespace-nowrap overflow-hidden">
            {" "}
            Tác Giả: {author}
          </p>
          <p className="text-start  text-slate-500 w-[200px] capitalize text-xs mt-2 whitespace-nowrap overflow-hidden">
            {" "}
            Ngày Xuất Bản: {publishing}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
