import React, { useState, useEffect } from "react";
import { FcNext } from "react-icons/fc";
import { AiOutlineLeft } from "react-icons/ai";

import image1 from "../images/2512_new.png";
import image2 from "../images/2620_new.png";
import image3 from "../images/2713_new.jpg";
import image4 from "../images/2749_new.png";
import image5 from "../images/2770_new.jpg";

const ListImage = () => {
  // image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageList = [image1, image2, image3, image4, image5]; // Thêm URL hình ảnh của bạn ở đây

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imageList.length);
  };
  const returnImage = () => {
    setCurrentImageIndex((currentImageIndex - 1) % imageList.length);
  };
  return (
    <div>
      <div className=" px-14 pb-3 flex w-full ">
        <img
          src={imageList[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="w-full h-auto "
        />
        {/* <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 "
        ></button> */}

        <div className="absolute flex px-2 py-2 w-11/12 justify-between mt-32 ">
          <p className="">
            <AiOutlineLeft
              onClick={returnImage}
              className=" text-4xl text-blue-600 absolute"
            />
          </p>
          <p className="mr-9">
            <FcNext
              onClick={nextImage}
              className=" text-4xl text-white absolute"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListImage;
