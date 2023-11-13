import React from "react";
import icon1 from "../images/after_title.png";
import icon2 from "../images/befor_title.png";
import logo from "../images/logo-mobifone-payment.png";
import info1 from "../images/info-payment-left-2023-new.png";
import info2 from "../images/info-payment-right-2023-new.png";
import qr from "../images/qr-payment-2023.png";
import reason1 from "../images/reason_1.png";
import reason2 from "../images/reason_2.png";
import reason3 from "../images/reason_3.png";
import reason4 from "../images/reason_4.png";
import reason5 from "../images/reason_5.png";
import qr1 from "../images/qrcode_install_app.png";
const BuyVip = () => {
  return (
    <div>
      <div className="flex justify-center space-x-4 py-2">
        <div className="flex flex-row justify-between p-3 md: px-32 px-5">
          <img
            src="https://ebook.waka.vn/themes/desktop/images/logo_waka_epay.png?v=1"
            className="mr-40"
          ></img>
          <div className="flex text-center pl-0 pr-0 cursor-pointer ">
            <a className="text-teal-500 font-semibold text-lg ml-16">
              Gói hội viên Waka
            </a>
            <a className="hover:text-teal-500 font-semibold text-lg ml-16">
              Nhập mã code
            </a>
            <a className="hover:text-teal-500 font-semibold text-lg ml-16">
              Hỗ trợ
            </a>
            <a className="px-6 py-1 bg-emerald-500 text-white rounded-full font-sans ml-28">
              Đăng Nhập
            </a>
          </div>
        </div>
      </div>

      <div className=" h-[600px] ">
        {/* area1*/}
        <div className="relative">
          <img
            src="https://ebook.waka.vn/themes/desktop/images/epay_bg.png"
            alt="Background"
            className="w-full h-80"
          />
          <div className="absolute top-0 left-0 right-0 bottom-24 flex flex-col justify-center items-center">
            <img
              src="https://ebook.waka.vn/themes/desktop/images/icon_vip_payment.png"
              alt="VIP Icon"
              className="text-yellow-500"
            />
            <div className="text-white text-3xl font-bold text-center mt-6">
              ĐỌC/ NGHE SÁCH KHÔNG GIỚI HẠN VỚI GÓI HỘI VIÊN WAKA
            </div>
            <div className="text-white text-xl font-sans text-center mt-6 mb-8">
              Thanh toán với: QRcode, ví điện tử, internet banking và thẻ visa
            </div>
          </div>
        </div>

        {/* cl1 */}
        <div className="flex ml-40 absolute top-52 m-20 h-[350px] w-[1000px]   ">
          <div className="w-72 h-80 bg-white shadow-md rounded-3xl py-10">
            <div className="font-bold text-[24px] text-center text-gray-600">
              WAKA 01 THÁNG
            </div>

            <div className="text-[16px] text-gray-500 text-center ">
              30 ngày đọc/nghe sách
            </div>
            <div className="text-[64px] font-medium text-emerald-500 ">
              <div className="flex justify-center ml-2">
                <h1 className="">30</h1>
                <div className="mt-6 font-bold">
                  <p className="text-xl">.000</p>
                  <p className="text-xl">VND</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-9">
              <span className="px-8 py-2 bg-emerald-500 text-white rounded-full text-xl font-bold cursor-pointer">
                MUA GÓI
              </span>
            </div>
          </div>
          <div className="ml-16">
            <div className="w-72 h-80 bg-white shadow-md rounded-3xl  pt-30 pb-60 py-10">
              <div className="font-bold text-[24px] text-center text-gray-600">
                WAKA 06 THÁNG
              </div>

              <div className="text-[16px] text-gray-500 text-center">
                183 ngày đọc/nghe sách
              </div>
              <div className="text-[64px] font-medium text-emerald-500 ">
                <div className="flex justify-center ml-2">
                  <h1 className="">179</h1>
                  <div className="mt-6 font-bold">
                    <p className="text-xl">.000</p>
                    <p className="text-xl">VND</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-9">
                <span className="px-8 py-2 bg-emerald-500 text-white rounded-full text-xl font-bold cursor-pointer">
                  MUA GÓI
                </span>
              </div>
            </div>
          </div>
          <div className="ml-16">
            <div className="w-72 h-80 bg-white shadow-md rounded-3xl  pt-30 pb-60 py-10 absolute">
              <div className="font-bold text-[24px] text-center text-gray-600">
                WAKA 12 THÁNG
              </div>

              <div className="text-[16px] text-gray-500 text-center">
                365 ngày đọc/nghe sách
              </div>
              <div className="text-[64px] font-medium text-emerald-500 ">
                <div className="flex justify-center ml-2">
                  <h1 className="">329</h1>
                  <div className="mt-6 font-bold">
                    <p className="text-xl">.000</p>
                    <p className="text-xl">VND</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-9">
                <span className="px-8 py-2 bg-emerald-500 text-white rounded-full text-xl font-bold cursor-pointer">
                  MUA GÓI
                </span>
              </div>
            </div>
            <div className="bg-red-500 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl text-white w-[75px] h-11 absolute mt-[-20px] ml-[250px] border-2 border-white text-center py-1 ">
              <span className="text-xl w-full h-full ">-10%</span>
            </div>
            <div className="absolute ml-32 mt-[186px] line-through font-sans decoration-gray-400">
              <p>360.000 VNĐ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1000px] w-full">
        <div className="flex justify-center items-center mr-10 mb-10">
          <img src={icon1} className="h-5" />
          <h1 className="px-6 font-bold text-4xl">Thanh toán bằng SMS</h1>
          <img src={icon2} className="h-5" />
        </div>
        <div className="flex justify-center mr-56">
          <div className="w-64 h-80 bg-white shadow-md rounded-3xl pt-30 pb-60 py-10">
            <div className="font-bold text-[24px] text-center text-gray-600">
              WAKA 1 NGÀY
            </div>

            <div className="text-[16px] text-gray-500 text-center ">
              01 ngày đọc/nghe sách
            </div>
            <div className="text-[64px] font-medium text-emerald-500 ">
              <div className="flex justify-center ml-2">
                <h1 className="">2</h1>
                <div className="mt-6 font-bold">
                  <p className="text-xl">.000</p>
                  <p className="text-xl">VND</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-9">
              <span className="px-8 py-2 bg-emerald-500 text-white rounded-full text-xl font-bold cursor-pointer">
                MUA GÓI
              </span>
              <div className="text-center text-sm mt-5 text-gray-500 font-sans  ">
                *Nhà mạng áp dụng: Vinaphone
              </div>
            </div>
          </div>
          <div className="ml-16">
            <div className="w-64 h-80 bg-white shadow-md rounded-3xl  pt-30 pb-60 py-10">
              <div className="font-bold text-[24px] text-center text-gray-600">
                WAKA 7 NGÀY
              </div>

              <div className="text-[16px] text-gray-500 text-center">
                07 ngày đọc/nghe sách
              </div>
              <div className="text-[64px] font-medium text-emerald-500 ">
                <div className="flex justify-center ml-2">
                  <h1 className="">7</h1>
                  <div className="mt-6 font-bold">
                    <p className="text-xl">.000</p>
                    <p className="text-xl">VND</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-9">
                <span className="px-8 py-2 bg-emerald-500 text-white rounded-full text-xl font-bold cursor-pointer">
                  MUA GÓI
                </span>
                <div className="text-center text-sm mt-5 text-gray-500 font-sans  ">
                  *Nhà mạng áp dụng: Viettel, Vinaphone
                </div>
              </div>
            </div>
          </div>
          <div className="ml-16">
            <div className="w-64 h-80 bg-white shadow-md rounded-3xl  pt-30 pb-60 py-10 absolute">
              <div className="font-bold text-[24px] text-center text-gray-600">
                WAKA 30 NGÀY
              </div>

              <div className="text-[16px] text-gray-500 text-center">
                30 ngày đọc/nghe sách
              </div>
              <div className="text-[64px] font-medium text-emerald-500 ">
                <div className="flex justify-center ml-2">
                  <h1 className="">30</h1>
                  <div className="mt-6 font-bold">
                    <p className="text-xl">.000</p>
                    <p className="text-xl">VND</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-9">
                <span className="px-8 py-2 bg-emerald-500 text-white rounded-full text-xl font-bold cursor-pointer">
                  MUA GÓI
                </span>
                <div className="text-center text-sm mt-5 text-gray-500 font-sans  ">
                  *Nhà mạng áp dụng: Viettel, Vinaphone
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-64 h-80 bg-white shadow-md rounded-3xl pt-30 pb-60 py-10">
            <div className="font-bold text-[24px] text-center text-gray-600">
              WAKA 3 THÁNG
            </div>

            <div className="text-[16px] text-gray-500 text-center ">
              90 ngày đọc/nghe sách
            </div>
            <div className="text-[64px] font-medium text-emerald-500 ">
              <div className="flex justify-center ml-2">
                <h1 className="">85</h1>
                <div className="mt-6 font-bold">
                  <p className="text-xl">.000</p>
                  <p className="text-xl">VND</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-9">
              <span className="px-8 py-2 bg-emerald-500 text-white rounded-full text-xl font-bold cursor-pointer">
                MUA GÓI
              </span>
              <div className="text-center text-sm mt-5 text-gray-500 font-sans  ">
                *Nhà mạng áp dụng: Vinaphone
              </div>
            </div>
          </div>
          <div className="ml-16">
            <div className="w-64 h-80 bg-white shadow-md rounded-3xl  pt-30 pb-60 py-10">
              <div className="font-bold text-[24px] text-center text-gray-600">
                WAKA 12 THÁNG
              </div>

              <div className="text-[16px] text-gray-500 text-center">
                365 ngày đọc/nghe sách
              </div>
              <div className="text-[64px] font-medium text-emerald-500 ">
                <div className="flex justify-center ml-2">
                  <h1 className="">324</h1>
                  <div className="mt-6 font-bold">
                    <p className="text-xl">.000</p>
                    <p className="text-xl">VND</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-9">
                <span className="px-8 py-2 bg-emerald-500 text-white rounded-full text-xl font-bold cursor-pointer">
                  MUA GÓI
                </span>
                <div className="text-center text-sm mt-5 text-gray-500 font-sans  ">
                  *Nhà mạng áp dụng: Vinaphone
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1000px] w-full">
          <div className="flex justify-center items-center mr-10 mt-20">
            <img src={icon1} className="h-5" />
            <h1 className="px-6 font-bold text-4xl">
              Ưu đãi đặc biệt cho thuê bao
            </h1>
            <img src={icon2} className="h-5" />
          </div>
          <div className="flex justify-center items-center mr-10 mt-10 mb-10">
            <img src={logo} />
          </div>
          <div>
            <div className="flex justify-center">
              <img src={info1} />
              <div className="w-96 h-[420px] bg-white shadow-md rounded-3xl py-10">
                <p className="font-bold text-[24px] text-center text-gray-600">
                  EDUPRO WAKA NGÀY
                </p>
                <p className="text-[16px] text-gray-500 text-center mt-5">
                  Soạn tin nhắn hoặc quét mã QR <br className="mb-4" />
                  dưới đây để nhận ngay ưu đãi
                  <img src={qr} className="mx-auto mt-2 w-28" />
                </p>
                <div className="text-center mt-4">
                  <p className="text-gray-800 font-bold text-xl">
                    Soạn
                    <span className="text-teal-400 text-2xl"> EPW </span>
                    gửi
                    <span className="text-teal-400 text-2xl"> 999 </span>
                  </p>
                  <p class="text-gray-800 mt-1 font-bold">
                    <span class="text-teal-400">6.000 VNĐ</span>/Ngày
                  </p>
                  <div className="text-center mt-5">
                    <span className="px-8 py-2 bg-emerald-500 text-white rounded-full text-xl font-bold cursor-pointer">
                      MUA GÓI
                    </span>
                  </div>
                </div>
              </div>
              <img src={info2} />
            </div>
            <div className="mt-11 h-96 border-b-4 border-teal-500">
              <div className="flex justify-center items-center mr-10 mb-20">
                <img src={icon1} className="h-5" />
                <h1 className="px-6 font-bold text-4xl">
                  Lý do đăng ký gói hội viên Waka?
                </h1>
                <img src={icon2} className="h-5" />
              </div>
              <div className="h-[500px] w-ful ">
                <div className="flex  justify-center items-center w-[1040px] h-[234px] ml-[120px]">
                  <div className="text-center  h-[234px] w-[214px] px-2 mx-1">
                    <img src={reason1} className="ml-12" />
                    <p className="font-bold mt-5">
                      Đọc sách không có <br className="" />
                      quảng cáo
                    </p>
                  </div>
                  <div className="text-center  h-[234px] w-[234px] px-2 mx-1">
                    <img src={reason2} className="ml-12" />
                    <p className="font-bold mt-5">
                      Kho nội dung bản quyền đa dạng từ Ebook, audiobook, truyện
                      tranh đến kho nội dung của các nhà xuất bản
                    </p>
                  </div>
                  <div className="text-center h-[234px] w-[214px] px-2 mx-1">
                    <img src={reason3} className="ml-12" />
                    <p className="font-bold mt-5">
                      Đọc truyện tranh kiểu mới <br className="" />
                      theo cách Waka
                    </p>
                  </div>
                  <div className="text-center h-[234px] w-[214px] px-2 mx-1">
                    <img src={reason4} className="ml-12" />
                    <p className="font-bold mt-5">
                      Nghe offline audiobook và ghi chú dễ dàng những audiobook
                      yêu thích
                    </p>
                  </div>
                  <div className="text-center h-[234px] w-[214px] px-2 mx-1">
                    <img src={reason5} className="ml-12" />
                    <p className="font-bold mt-5">
                      Đọc mọi lúc mọi nơi, đa nền tảng, <br className="" />
                      đa thiết bị
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[300px] w-full  px-20 mt-7">
              <div className="h-[300px] w-full flex">
                <div className="text-left text-sm w-[850px]">
                  <div className="font-bold text-lg uppercase">
                    Thông Tin Liên Hệ
                  </div>
                  <div>
                    <p className="mt-4">
                      <strong>Công ty Cổ phần Sách điện tử Waka</strong>- Tầng
                      6, tháp văn phòng quốc tế Hòa Bình, số 106, đường Hoàng
                      Quốc Việt, phường Nghĩa Đô, Quận Cầu Giấy, thành phố Hà
                      Nội, Việt Nam.
                    </p>
                    <p className="mt-5">
                      ĐKKD số 0108796796 do SKHĐT TP Hà Nội cấp ngày 24/06/2019
                      | Chịu trách nhiệm nội dung:
                      <strong>Ông Đinh Quang Hoàng</strong>
                    </p>
                    <p>
                      Giấy xác nhận Đăng ký hoạt động phát hành xuất bản phẩm
                      điện tử số 8132/XN-CXBIPH do Cục Xuất bản, In và Phát hành
                      cấp ngày 31/12/2019
                    </p>
                    <p className="mt-2">
                      Giấy chứng nhận Đăng ký cung cấp dịch vụ nội dung thông
                      tin trên mạng Viễn thông di động số 19/GCN-DĐ do Cục Phát
                      thanh, truyền hình và thông tin điện tử ký ngày 11/03/2020
                    </p>
                    <p className="mt-5">
                      {" "}
                      Email: <strong>support@waka.vn</strong> | Tel:{" "}
                      <strong>0877736289</strong>
                    </p>
                  </div>
                </div>

                <div>
                  <div className="font-bold text-lg uppercase text-start">
                    Thông Tin Ứng Dụng
                  </div>
                  <div className="flex">
                    <div>
                      <img src={qr1} className=" mr-1 mt-5 w-36" />
                    </div>
                    <div className="mt-5 ml-1 text-start  ">
                      <p className="text-xs">
                        Hệ điều hành <strong>Android</strong>
                      </p>
                      <p className="text-xs">Phiên bản ứng dụng: 7.4</p>
                      <p className="text-xs mt-7">Hệ điều hành IOS</p>
                      <p className="text-xs">Phiên bản ứng dụng: 7.4</p>
                      <p className="text-xs mt-7">Ngày đăng: 06/12/2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyVip;
