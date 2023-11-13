import React, { useState, useEffect } from "react";
import { Spinner } from "@material-tailwind/react";

// import icon

import { FcNext } from "react-icons/fc";
import { AiOutlineLeft } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";

//import image
import image1 from "../images/2512_new.png";
import image2 from "../images/2620_new.png";
import image3 from "../images/2713_new.jpg";
import image4 from "../images/2749_new.png";
import image5 from "../images/2770_new.jpg";
import image6 from "../images/bannerButton.jpg";
import image7 from "../images/bg-box-comic.jpg";
import image8 from "../images/419.jpg";
import image9 from "../images/423.jpg";
import image10 from "../images/470.jpg";
import image11 from "../images/559.jpg";
import image12 from "../images/strengths-1.jpg";
import image13 from "../images/strengths-2.jpg";
import image14 from "../images/strengths-4.jpg";
import image15 from "../images/strengths-5.jpg";
import image16 from "../images/dmca-badge-w100-2x1-04.png";
import image17 from "../images/android-qr.png";

const Home = () => {
  // connect to database
  const [test, setTest] = useState("");

  useEffect(() => {
    fetch("http://localhost:6060/connect")
      .then((res) => res.json())
      .then((data) => setTest(data.message));
  }, []);

  // image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageList = [image1, image2, image3, image4, image5]; // Thêm URL hình ảnh của bạn ở đây

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imageList.length);
  };
  const returnImage = () => {
    setCurrentImageIndex((currentImageIndex - 1) % imageList.length);
  };

  // note
  const [note, setNote] = useState(0);

  const listnote = [""];

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentImageIndex((currentImageIndex) => currentImageIndex + 1);
  //   }, 1000);
  // });

  const colors = {
    Orange: "#ea580c",
    Amber: "#fbbf24",
  };

  const [changeColor, setChangeColor] = useState(colors.Amber);

  useEffect(() => {
    setTimeout(() => {
      setChangeColor((changeColor) => changeColor + colors.Orange);
    }, 1000);
  });

  return (
    <div className="">
      {/* header */}

      {/* list image */}
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

      {/* dọc ngay */}
      <div className="px-14 py-2 flex w-full justify-end items-center">
        <img src={image6} />
        <button className="bg-amber-400 h-8 w-32 text-xs rounded-full px-3 font-bold text-white absolute mr-24">
          ĐỌC NGAY{" "}
        </button>
      </div>

      {/* Mới trong tuần */}
      <div className="w-full h-[420px] px-14 py-2 ">
        <div className="w-full h-full shadow-lg ">
          <div className="flex justify-between px-4">
            <p className="pt-4 mb-2 text-xl hover:text-emerald-500 cursor-pointer">
              Mới trong tuần
            </p>
            <p className="pt-5 text-emerald-600  mb-2 text-sm decoration-emerald-600 hover:underline cursor-pointer">
              XEM TẤT CẢ
            </p>
          </div>

          <hr className="px-6 bg-gray-100 " />
          <div className="w-full h-full ">
            <p className="text-center mt-20 ml-[570px]">
              <Spinner className="h-10 w-10 text-gray-900/50" color="blue" />
            </p>
            <h1>{test}</h1>
          </div>
        </div>
      </div>

      {/* BXH tháng */}
      <div className="w-full h-[420px] px-14 py-2 ">
        <div className="w-full h-full shadow-lg ">
          <div className="flex justify-between px-4">
            <p className="pt-4 mb-2 text-xl hover:text-emerald-500 cursor-pointer">
              BXH Tháng
            </p>
            <p className="pt-5 text-emerald-600  mb-2 text-sm decoration-emerald-600 hover:underline cursor-pointer">
              XEM TẤT CẢ
            </p>
          </div>

          <hr className="px-6 bg-gray-100 " />
          <div className="w-full h-full ">
            <p className="text-center mt-20 ml-[570px]">
              <Spinner className="h-10 w-10 text-gray-900/50" color="blue" />
            </p>
          </div>
        </div>
      </div>

      {/* Sách mới nhất */}
      <div className="w-full h-[420px] px-14 py-2 ">
        <div className="w-full h-full shadow-lg ">
          <div className="flex justify-between px-4">
            <p className="pt-4 mb-2 text-xl hover:text-emerald-500 cursor-pointer">
              Sách mới nhất
            </p>
            <p className="pt-5 text-emerald-600  mb-2 text-sm decoration-emerald-600 hover:underline cursor-pointer">
              XEM TẤT CẢ
            </p>
          </div>

          <hr className="px-6 bg-gray-100 " />
          <div className="w-full h-full ">
            <p className="text-center mt-20 ml-[570px]">
              <Spinner className="h-10 w-10 text-gray-900/50" color="blue" />
            </p>
          </div>
        </div>
      </div>

      {/* Truyện tranh */}
      <div className=" py-2 w-full h-[500px] ">
        <img src={image7} className="absolute" />
        <div className=" absolute flex px-14 py-6 h-36 w-full ">
          <button className="border-2 border-slate-950 py-2 px-8 ">
            <p className="text-white text-3xl font-bold font-serif">
              TRUYỆN TRANH
            </p>
          </button>
          <p className="text-white justify-between px-28 mt-6 font-serif">
            "… CHÚNG TÔI YÊU THƯƠNG VÀ CHIẾN TRANH, CƯỜI VÀ RỒI KHÓC… NHƯNG RỒI
            DẪU ĐOẠN ĐƯỜNG ĐI CÙNG NHAU CÓ GẬP GHỀNH ĐẾN THẾ NÀO, DẪU PHẢI BĂNG
            QUA BAO “Ổ GÀ” ĐI CHĂNG NỮA, CHÚNG TÔI VẪN LUÔN TIN RẰNG SAU CƠN MƯA
            TRỜI LẠI SÁNG, VÀ NẾU KHÔN...
          </p>
        </div>
        <div className="mt-36 px-20 flex absolute ">
          <div className="  h-72 w-52 rounded-md bg-white mr-20 px-4 py-4 cursor-pointer">
            <img src={image11} className="w-full h-full brightness-100 " />
          </div>
          <div className="  h-72 w-52 rounded-md bg-gray-950 hover:bg-white px-4 py-4 mr-16 cursor-pointer">
            <img
              src={image8}
              className="w-full h-full brightness-50 hover:brightness-100 "
            />
          </div>
          <div className="   h-72 w-52 rounded-md bg-gray-950 hover:bg-white px-4 py-4 mr-16 cursor-pointer">
            <img
              src={image10}
              className="w-full h-full brightness-50 hover:brightness-100"
            />
          </div>
          <div className="   h-72 w-52 rounded-md bg-gray-950 hover:bg-white px-4 py-4 mr-16 cursor-pointer">
            <img
              src={image9}
              className="w-full h-full brightness-50 hover:brightness-100"
            />
          </div>
        </div>
      </div>

      {/* Sách bán chạy */}
      <div className="w-full h-[340px] px-14 py-2 ">
        <div className="w-full h-full shadow-lg ">
          <div className="flex justify-between px-4">
            <p className="pt-4 mb-2 text-xl hover:text-emerald-500 cursor-pointer">
              Bán chạy nhất
            </p>
            <p className="pt-5 text-emerald-600  mb-2 text-sm decoration-emerald-600 hover:underline cursor-pointer">
              XEM TẤT CẢ
            </p>
          </div>

          <hr className="px-6 bg-gray-100 " />
          <div className="w-full h-full ">
            <p className="text-center mt-20 ml-[570px]">
              <Spinner className="h-10 w-10 text-gray-900/50" color="blue" />
            </p>
          </div>
        </div>
      </div>

      {/* Sách nên đọc */}
      <div className="w-full h-[340px] px-14 py-2 ">
        <div className="w-full h-full shadow-lg ">
          <div className="flex justify-between px-4">
            <p className="pt-4 mb-2 text-xl hover:text-emerald-500 cursor-pointer">
              Sách nên đọc
            </p>
            <p className="pt-5 text-emerald-600  mb-2 text-sm decoration-emerald-600 hover:underline cursor-pointer">
              XEM TẤT CẢ
            </p>
          </div>

          <hr className="px-6 bg-gray-100 " />
          <div className="w-full h-full ">
            <p className="text-center mt-20 ml-[570px]">
              <Spinner className="h-10 w-10 text-gray-900/50" color="blue" />
            </p>
          </div>
        </div>
      </div>

      {/* thanks */}
      <div className="w-full h-[340px] px-14 py-4 ">
        <div className="w-full h-full shadow-lg ">
          <p className="py-2 mb-2">
            Cảm ơn các bạn đã tin tưởng chọn Ebook.waka.vn . Sự ủng hộ của các
            bạn là động lực giúp chúng tôi không ngừng cải tiến và phát triển!
          </p>
          <hr className="px-6 bg-gray-100 " />

          <div className="my-8 flex w-full justify-between  px-32 ">
            <div className="h-[230px] w-[210px] ">
              <img src={image12} />
              <p className="text-lg py-2">Đọc ở mọi lúc mọi nơi</p>
              <p className="text-sm text-gray-500">
                Ebook.waka.vn dùng được trên cả máy tính, di động, máy tính
                bảng.
              </p>
            </div>
            <div className="h-[230px] w-[210px] ">
              <img src={image13} />
              <p className="text-lg py-2">Không quảng cáo</p>
              <p className="text-sm text-gray-500">
                Tất cả các sách bạn đọc đều không có quảng cáo.
              </p>
            </div>
            <div className="h-[230px] w-[210px] ">
              <img src={image14} />
              <p className="text-lg py-2">Đa dạng thể loại nội dung</p>
              <p className="text-sm text-gray-500">
                Ebook.waka.vn có: Sách chữ, sách nói, truyện tranh và tạp chí.
              </p>
            </div>
            <div className="h-[230px] w-[210px] ">
              <img src={image15} />
              <p className="text-lg py-2">Đọc sách Hội Viên siêu rẻ</p>
              <p className="text-sm text-gray-500">
                Chỉ 1,000 vnđ/ngày là bạn có thể đọc Trọn bộ sách yêu thích trên
                ebook.waka.vn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*list note */}
      <div className="w-full bg-emerald-600 h-[170px] mt-7">
        <p className="animate-spin "> </p>
      </div>

      {/* buttom */}
      <div className="px-14 w-full py-4">
        <div className="flex justify-between px-2 py-3">
          <div className="h-[240px] w-[300px] text-start ">
            <h1 className="mb-2 font-bold">THÔNG TIN HỮU ÍCH</h1>
            <div className="flex">
              <div className="w-[120px]">
                <p className="text-sm text-gray-500 my-1 cursor-pointer hover:text-emerald-500">
                  Giới thiệu chung
                </p>
                <p className="text-sm text-gray-500 my-1 cursor-pointer hover:text-emerald-500">
                  Review Truyện - Cafe Sách
                </p>
                <p className="text-sm text-gray-500 my-1 cursor-pointer hover:text-emerald-500">
                  Tin Tức
                </p>
              </div>
              <div className="w-[130px]">
                <p className="text-sm text-gray-500 my-1 cursor-pointer hover:text-emerald-500">
                  Thỏa thuận sử dụng dịch vụ
                </p>
                <p className="text-sm text-gray-500 my-1 cursor-pointer hover:text-emerald-500">
                  Quyền lợi
                </p>
                <p className="text-sm text-gray-500 my-1 cursor-pointer hover:text-emerald-500">
                  Quy định riêng tư{" "}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 my-1 cursor-pointer hover:text-emerald-500">
              Thử thách đọc sách
            </p>
          </div>
          <div className="h-[240px] w-[300px]  text-center px-5 ">
            <h1 className="font-bold">THÔNG TIN LIÊN HỆ</h1>
            <div className="w-full px-4 h-[50px] bg-emerald-600 rounded-full flex items-center my-2 justify-center">
              <BiSolidPhoneCall className="text-white text-3xl" />
              <p className="text-lg text-white ml-2 font-bold">
                1900545482 nhánh 5
              </p>
            </div>
            <p className="text-sm text-gray-500 my-1 mt-8">
              Tổng đài tư vấn miễn phí
            </p>
            <p className="text-sm text-gray-500 my-1">(8:00 AM - 22:00 PM)</p>
            <img src={image16} className="ml-20 mt-2 cursor-pointer" />
          </div>
          <div className="h-[240px] w-[300px]  text-start ">
            <h1 className="font-bold">ỨNG DỤNG DI ĐỘNG</h1>
            <div>
              <div className="w-full h-[80px] flex mt-4 items-center ">
                <div className="w-[70px] h-[70px] shadow-xl mr-3">
                  <img src={image17} />
                </div>
                <div className="">
                  <p className="text-xs text-gray-500 my-1">
                    Hệ điều hành Android
                  </p>
                  <p className="text-xs text-gray-500 my-1">
                    Phiên bản ứng dụng: 7.4
                  </p>
                  <p className="text-xs text-gray-500 my-1">
                    Ngày đăng: 06/12/2019
                  </p>
                </div>
              </div>
              <div className="w-full h-[80px] flex ">
                <div className="w-[70px] h-[70px] shadow-xl mr-3 mt-3">
                  <img src={image17} />
                </div>
                <div className="mt-2">
                  <p className="text-xs text-gray-500 my-1">Hệ điều hành IOS</p>
                  <p className="text-xs text-gray-500 my-1">
                    Phiên bản ứng dụng: 7.4
                  </p>
                  <p className="text-xs text-gray-500 my-1">
                    Ngày đăng: 04/12/2019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-full text-start pr-20 mt-4">
          <p className=" text-xs text-gray-600 py-1">
            Công ty Cổ phần Sách điện tử Waka - Tầng 6, tháp văn phòng quốc tế
            Hòa Bình, số 106, đường Hoàng Quốc Việt, phường Nghĩa Đô, Quận Cầu
            Giấy, thành phố Hà Nội, Việt Nam.
          </p>
          <p className=" text-xs text-gray-600 py-1 ">
            ĐKKD số 0108796796 do SKHĐT TP Hà Nội cấp ngày 24/06/2019 | Chịu
            trách nhiệm nội dung: Ông Đinh Quang Hoàng
          </p>
          <p className=" text-xs text-gray-600 py-1">
            Giấy xác nhận Đăng ký hoạt động phát hành xuất bản phẩm điện tử số
            8132/XN-CXBIPH do Cục Xuất bản, In và Phát hành cấp ngày 31/12/2019
          </p>
          <p className=" text-xs text-gray-600 py-1">
            Giấy chứng nhận Đăng ký cung cấp dịch vụ nội dung thông tin trên
            mạng Viễn thông di động số 19/GCN-DĐ do Cục Phát thanh, truyền hình
            và thông tin điện tử ký ngày 11/03/2020
          </p>
          <p className=" text-xs text-gray-600 py-1">
            Số VPGD: 024.73086566 | Số CSKH: 1900545482 nhánh 5 | Hotline:
            0877736289
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
