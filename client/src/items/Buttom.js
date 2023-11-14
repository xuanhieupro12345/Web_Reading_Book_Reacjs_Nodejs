import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import image16 from "../images/dmca-badge-w100-2x1-04.png";
import image17 from "../images/android-qr.png";

const Buttom = () => {
  return (
    <div>
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

export default Buttom;
