import React, { useState, useEffect } from "react";
import { Spinner } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../items/Card";
import Buttom from "../items/Buttom";
import ListImage from "../items/ListImage";
import NewThisWeek from "../items/NewThisWeek";
import CardSmall from "../items/CardSmall";
// import icon
//import image
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

const Home = () => {
  const { id } = useParams();
  const [productbook, setProductbook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER}/product`
        );
        if (response.data) {
          console.log(response.data);
          setProductbook(response.data);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
      <ListImage />

      {/* dọc ngay */}
      <div className="px-14 py-2 flex w-full justify-end items-center">
        <img src={image6} />
        <button className="bg-amber-400 h-8 w-32 text-xs rounded-full px-3 font-bold text-white absolute mr-24">
          ĐỌC NGAY{" "}
        </button>
      </div>

      <NewThisWeek />

      {/* BXH tháng */}
      {/* <div className="w-full h-[420px] px-14 py-2 ">
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
          <div className="flex gap-5 overflow-scroll scroll-smooth transition-all">
            {loading ? (
              <p className="text-center mt-20 ml-[570px]">
                <Spinner className="h-10 w-10 text-gray-900/50" color="blue" />
              </p>
            ) : (
              productbook.map((item) => {
                return (
                  <Card
                    key={item._id}
                    imageBook={item.imageBook}
                    nameBook={item.nameBook}
                    author={item.author}
                    publishing={item.publishing}
                  />
                );
              })
            )}
          </div>
        </div>
      </div> */}

      {/* Sách mới nhất */}
      {/* <div className="w-full h-[420px] px-14 py-2 ">
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
          <div className="flex gap-5 overflow-scroll scroll-smooth transition-all">
            {loading ? (
              <p className="text-center mt-20 ml-[570px]">
                <Spinner className="h-10 w-10 text-gray-900/50" color="blue" />
              </p>
            ) : (
              productbook.map((item) => {
                return (
                  <Card
                    key={item._id}
                    imageBook={item.imageBook}
                    nameBook={item.nameBook}
                    author={item.author}
                    publishing={item.publishing}
                  />
                );
              })
            )}
          </div>
        </div>
      </div> */}

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
          <div className="flex gap-5 overflow-scroll scroll-smooth transition-all">
            {loading ? (
              <p className="text-center mt-20 ml-[570px]">
                <Spinner className="h-10 w-10 text-gray-900/50" color="blue" />
              </p>
            ) : (
              productbook.map((item) => {
                return (
                  <CardSmall
                    key={item._id}
                    imageBook={item.imageBook}
                    nameBook={item.nameBook}
                    author={item.author}
                    publishing={item.publishing}
                  />
                );
              })
            )}
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
          <div className="flex gap-5 overflow-scroll scroll-smooth transition-all">
            {loading ? (
              <p className="text-center mt-20 ml-[570px]">
                <Spinner className="h-10 w-10 text-gray-900/50" color="blue" />
              </p>
            ) : (
              productbook.map((item) => {
                return (
                  <CardSmall
                    key={item._id}
                    imageBook={item.imageBook}
                    nameBook={item.nameBook}
                    author={item.author}
                    publishing={item.publishing}
                  />
                );
              })
            )}
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

      {/* buttom */}
      <Buttom />
    </div>
  );
};

export default Home;
