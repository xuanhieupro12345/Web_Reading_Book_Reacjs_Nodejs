import React from "react";
import { GrFormNext } from "react-icons/gr";
import logo1 from "../images/46432.jpg.png";
import { AiOutlineHeart } from "react-icons/ai";
import logo2 from "../images/hinh1.jpg";
import logo3 from "../images/hinh2.jpg";
import logo4 from "../images/hinh3.jpg";
import hinh1 from "../images/hinh duoi 1.jpg";
import hinh2 from "../images/hinh duoi 2.jpg";
import hinh3 from "../images/hinh duoi 3.jpg";
import hinh4 from "../images/hinh duoi 4.jpg";
import hinh5 from "../images/hinh duoi 5.jpg";
import hinh6 from "../images/hinh duoi 6.jpg";
import hinh7 from "../images/hinh duoi 7.jpg";
import hinh8 from "../images/hinh duoi 8.jpg";
function HomePage() {
  return (
    <div>
      {/* vunglon */}
      <div className="flex items-center relative  bg-primary-xam border-x-primary-xamnhat  ">
        <p className="text-primary-xamnhat font-sans  cursor-pointer  ">
          Trang chủ
        </p>
        <GrFormNext></GrFormNext>
        <p className="text-primary-xanh font-sans">Ảo ảnh và Ảo mộng</p>
      </div>
      {/* vung ket thuc cua vung lon */}

      {/* Vung giua lon */}
      <div className="max-w-[1180px]  m-auto  min-w-[1100px] w-[1100px]font-sans text-[13px]  ">
        {/* vung  row  */}
        <div className=" flex flex-wrap">
          {/* vung giua nho */}
          <div className="w-[850px] scroll-pr-[15px] scroll-pl-[15px] text-primary-den font-sans  text-[13px] font-normal leading[1.5px]">
            <div className="flex flex-wrap mr-[15px] ml-[-15px]">
              <div className="pt-0 max-w-screen-xl m-auto pb-[15px] overflow-hidden min-w-[1100px] w-[1100px] pr-[15px] pl-[15px] block container pbt15 detail-book ">
                <div className="flex ju mt-0 grid">
                  <div className="h-[35px] border-b-[1px] border-solid  relative ">
                    <h2 className="w-[240px] float-left text-[20px] mb-2 font-medium leading-1 mt-0 box-decoration-clone">
                      Truyện
                    </h2>
                    <div className="w-[850px]  auto-rows-auto	mt-[6px] mr-auto ml-auto relative  ">
                      <div className="justify-center w-full h-full relative box-content font-normal leading-normal ml-80 ">
                        <div className="mr-[28px] w-auto shrink-0 h-full relative font-sans flex justify-center ">
                          <div className="pb-2.5 border-none relative  font-sans    ">
                            <p className="cursor-pointer hover:text-primary-xanh ">
                              Tất cả
                            </p>
                          </div>
                          <div className="ml-7 hover:text-primary-xanh cursor-pointer">
                            <h2>Thơ - Tản văn</h2>
                          </div>
                          <div className="ml-7 hover:text-primary-xanh cursor-pointer">
                            <h2>Kiếm hiệp</h2>
                          </div>
                          <div className="ml-7 hover:text-primary-xanh cursor-pointer">
                            <h2>Truyện ngắn</h2>
                          </div>
                          <div className="ml-7 hover:text-primary-xanh cursor-pointer">
                            <h2>Tự truyện</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-wrap grid-cols-1 w-[830px] pr-[15px] pl-[15px]   h-[550px] ">
                    <div className="   mr-[-15px] ml-[-15px]   ">
                      <div className="p-20   relative ">
                        <div className="z-10 top-[14px] right-[15px] absolute w-[130px] h-36   "></div>
                        <div className="relative table float-left w-60 h-[351px] text-[13px] ">
                          <img src={logo1} />
                        </div>
                        <div className=" ">
                          <p>
                            <AiOutlineHeart className="ml-24 inline-block h-9  w-9 bg-[35px 35px] cursor-pointer hover:text-yellow-300 "></AiOutlineHeart>
                          </p>
                          <p className=" ml-20 inline-block font-sans cursor-pointer ">
                            <span>Đánh giá sách</span>
                          </p>
                          <div className="text-center mt-1 relative     text-[13px] font-sans  ">
                            <p className="text-primary-den hover:text-primary-xanh">
                              5.00 /5 (1 votes)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" pl-9 h-[351px]  font-sans text-[13px]  w-[405px] mt-[85px]">
                      <div className="cursor-pointer hover:text-primary-xanh">
                        <p className="w-[355px] text-[20px]">
                          Ảo ảnh và Ảo mộng
                        </p>
                      </div>
                      <div className="h-7 block flex ">
                        <p className="leading-4 font-sans text text-[13px]">
                          Tác giả:
                        </p>
                        <span className="text-primary-xamnhat cursor-pointer leading-4 ml-1 hover:text-primary-xanh">
                          Nhật Lan
                        </span>
                      </div>
                      <div className="m-0 font-sans block  text-[13px] ">
                        <p className="">
                          Thể loại:
                          <a className="text-primary-xamnhat ml-1 cursor-pointer hover:text-primary-xanh font-sans  text-[13px]">
                            Truyện dài - Tiểu thuyết
                          </a>
                          <a className="text-primary-xamnhat cursor-pointer hover:text-primary-xanh font-sans text-[13px]">
                            , Truyện
                          </a>
                        </p>
                      </div>
                      <div className="h-7 text-primary-den font-sans text-[13px]">
                        <p className="m-0 ">Định dạng: Epub</p>
                        <p>Ngày cập nhật: 19/10/2023</p>
                        <p>Gói cước áp dụng: Hội viên</p>
                      </div>
                      <div className="cursor-pointer">
                        <p className="w-32 h-[25px] float-left text-center bg-primary-xanh text-white leading-[25px] uppercase mt-[70px] mb-[20px] rounded-[2px] ">
                          Đọc sách
                        </p>
                      </div>
                      <div className="text-primary-den font-sans  text-[13px] font-normal  mt-32  relative">
                        <div>
                          "Sẽ thế nào nếu cuộc sống trôi qua mà không có bất cứ
                          điều hoang đường nào?".
                        </div>
                        <div className="text-[13px] font-normal">
                          Tiểu thuyết
                          <strong className="text-black ml-1">
                            Ảo ảnh và Ảo mộng &nbsp;
                          </strong>
                          gồm 2 phần truyện là "
                          <strong>Ảo ảnh vĩnh hằng</strong>" và"
                          <strong className="ml-1">Ảo mộng hoa hồng</strong>
                          ", tên tiếng Anh là Illusion & Reverie.
                        </div>
                        <div>Mời các bạn đón đọc!</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* vung duoi */}
                <div className="pb-0 max-w-[800px] w-calc-[100%-10px] pt-[50px] pr-[15px] pl-[15px] relative mt-[1px] bg-primary-xam"></div>
              </div>
            </div>
            {/* vung ben phai */}
          </div>

          {/* vung ben phai */}
          <div className="  w-[270px]  h-[500px] pt-[15px] pl-[15px] block font-normal mt-24 text-[13px]">
            <div className="mb-[20px] text-primary-den font-sans ">
              <div className="mr-[-15px] ml-[-15px] ">
                <div className="pt-[15px] pb-[15px] pr-[15px] pl-[15px] w-full ">
                  <h2 className="text-center text-[20px] mb-[0.5rem]  font-medium leading-[1.1] mt-0 block">
                    Có thể bạn thích
                  </h2>
                  {/* hinh anh ben phai  */}
                  <div className="mt-[27px] font-sans text-primary-den  text-[13px]">
                    {/* Truyen 1 */}
                    <div className="flex flex-nowrap flex-row	 mb-[30px] ">
                      <div className="w-[68px] h-[100px] touch-manipulation	 cursor-pointer text-[13px] mx-auto mt-2 w-2 ml-3 max-w-full align-middle	 border-none	 overflow-clip ">
                        <img src={logo2} />
                      </div>
                      <div className="pt-[5px] z-[999] flex-auto p-[1.25rem]">
                        <div className="text-[14px] text-primary-den ">
                          <p className="touch-manipulation cursor-pointer hover:text-primary-xanh">
                            50 Sắc thái - Ám ảnh
                          </p>
                        </div>
                        <div className="cursor-pointer text-primary-xamnhat">
                          <p>E. L. James</p>
                        </div>
                      </div>
                    </div>
                    {/* truyen 2 */}
                    <div className="flex flex-nowrap mb-[30px] text-primary-den font-sans text-[13px]">
                      <div className="w-[68px] h-[100px] touch-manipulation	 cursor-pointer text-[13px] mx-auto mt-2 w-2 ml-3 max-w-full align-middle	 border-none	 overflow-clip ">
                        <img src={logo3} />
                      </div>
                      <div className="pt-[5px] z-[999] flex-1 p-[1.25rem] font-sans text-[13px] ">
                        <div className="text-[14px]  ">
                          <p className="cursor-pointer hover:text-primary-xanh  touch-manipulation">
                            Sống mòn
                          </p>
                        </div>
                        <div className="cursor-pointer text-primary-xamnhat">
                          <p>Nam Cao</p>
                        </div>
                      </div>
                    </div>
                    {/* truyen 3 */}
                    <div className="flex flex-nowrap mb-[30px] text-primary-den font-sans">
                      <div className="w-[68px] h-[100px] touch-manipulation	 cursor-pointer text-[13px] mx-auto mt-2 w-2 ml-3 max-w-full align-middle	 border-none	 overflow-clip">
                        <img src={logo4} />
                      </div>
                      <div className="pt-[5px] z-[999] flex-1 p-[1.25rem] font-sans text-[13px]">
                        <div className="cursor-pointer hover:text-primary-xanh  touch-manipulation text-[14px] ">
                          <div className="">Pháo đài số</div>
                        </div>
                        <div className="cursor-pointer text-primary-xamnhat">
                          <p>Dan Brown</p>
                        </div>
                      </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* vung giua duoi */}
        <div className="w-[calc(100% - 100px)] p-[15px] relative mt-[20px] font-sans   text-[13px] font-normal h-[1100px]  ">
          <div className="font-sans">
            <div className="relative mb-[10px] h-[35px] border-b-[1px] border-solid	 border-primary-xam">
              <h2 className="text-[20px] inline  font-medium leading-[1.1]">
                Sách cùng thể loại "Truyện dài - Tiểu thuyết"
              </h2>
            </div>
          </div>
          {/* vung thanh cuon ngang
          <div className="   text-primary-den font-sans text-[13px] font-normal  ">
            <div className="ml-auto mr-auto relative overflow-hidden  bg-black">
              <div className="duration-0 ease-out	m-auto mt-0 mb-0 relative   flex flex-row justify-normal box-content		">
                <div className="w-[154px] bg-black mr-[28px]  h-full relative">
                  <div className="ml-[2px] float-left h-auto">
                    <div className="duration-[0.2s] ease-out delay-0	transition-all w-[1110px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div> */}
          <div
            id="animation-carousel"
            className="relative w-full   "
            data-carousel="static"
          >
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96 flex   ">
              {/* Item 1 */}
              <div className=" duration-200 ease-linear " data-carousel-item="">
                <img src={hinh1} />
              </div>
              {/* Item 2 */}
              <div
                className=" mr-56 duration-200 ease-linear"
                data-carousel-item=""
              >
                <img
                  src={hinh2}
                  className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
              </div>
              {/* Item 3 */}
              <div
                className=" duration-200 ease-linear"
                data-carousel-item="active"
              >
                <img
                  src={hinh3}
                  className="absolute hiden  -translate-x-1/2 -translate-y-1/2 "
                />
              </div>
              {/* Item 4 */}
              <div className=" duration-200 ease-linear" data-carousel-item="">
                <img
                  src={hinh4}
                  className="absolute block  translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
              </div>
              {/* Item 5 */}
              <div className=" duration-200 ease-linear" data-carousel-item="">
                <img
                  src={hinh5}
                  className="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4"
                />
              </div>
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev=""
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-den dark:bg-gray-800/30 group-hover:bg-primary-xanh dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next=""
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-den dark:bg-gray-800/30 group-hover:bg-primary-xanh dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* vung ket thuc cua vung giua */}

      {/* vung ket thuc */}
    </div>
  );
}

export default HomePage;
