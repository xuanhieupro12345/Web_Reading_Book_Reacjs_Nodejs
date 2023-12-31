import React from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Card = ({
  imageBook,
  nameBook,
  publishing,
  author,
  onDelete,
  onEdit,
}) => {
  return (
    <div>
      <div className="w-full mt-3 h-[340px] flex min-w-[220px] max-w-[220px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer">
        <div>
          <div className="text-start w-full">
            <img
              src={imageBook} // Use imageBook prop here
              className="h-52 bg-contain w-[190px] object-cover"
            />
          </div>
          <p className="text-start w-[200px] text-green-500 text-xl mt-1 font-bold whitespace-nowrap overflow-hidden">
            {nameBook}
          </p>
          <p className="text-start font-semibold text-slate-600 w-[200px] capitalize text-sm mt-1 whitespace-nowrap overflow-hidden">
            {" "}
            Tác Giả: {author}
          </p>
          <p className="text-start  text-slate-500 w-[200px] capitalize text-xs mt-1 whitespace-nowrap overflow-hidden">
            {" "}
            Ngày Xuất Bản: {publishing}
          </p>
          <div className="flex justify-start text-3xl mt-1 ">
            <p className="hover:bg-green-700 bg-green-600 w-[130px] text-xl text-white">
              Đọc Ngay
            </p>
            <bottom className="hover:text-green-600 " onClick={onEdit}>
              <CiEdit />
            </bottom>
            <bottom className="hover:text-red-600 ml-1" onClick={onDelete}>
              <MdDelete />
            </bottom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
