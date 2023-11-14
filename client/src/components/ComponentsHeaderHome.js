import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import icon
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { RiVipCrown2Line } from "react-icons/ri";
import { GiKiwiFruit } from "react-icons/gi";
import { BsListUl } from "react-icons/bs";

// import image
import logo from "../images/logo-waka.png";
import Home from "../pages/Home";

const ComponentsHeaderHome = () => {
  const [show, setShow] = useState(false);

  const hanleClickList = () => setShow(!show);

  const hanleCloseList = () => setShow(!show);
  return (
    <div>
      <div className="w-full h-24  px-14 py-2 shadow-md ">
        <div className=" flex mt-3 ">
          <div className="mr-14 cursor-pointer ">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div>
            <div className="flex h-8 ">
              <input
                type="text"
                placeholder="Nhập tên sách, tuyển tập, tác giả"
                className="box-content max-w-xl max-h-8 placeholder:text-slate-400 w-96 border border-slate-300"
              />
              <button
                className="bg-emerald-600 hover:bg-emerald-700 bg-clip-content flex items-center text-white font-thin font-normal "
                placeholder="Email"
              >
                {" "}
                <p className="pl-2 text-xl font-medium">
                  <AiOutlineSearch />
                </p>
                <h1 className="px-1">Tìm Kiếm</h1>
              </button>
              <div className="ml-44 flex ">
                <button className="bg-orange-500 hover:bg-orange-600 rounded-full flex items-center px-2 mr-5 text-gray-200">
                  Hiệu Sồi{" "}
                  <p className="ml-1">
                    <GiKiwiFruit />
                  </p>
                </button>
                <button className="bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center px-2 mr-5 text-gray-200">
                  Gói Hội Viên{" "}
                  <p className="ml-1">
                    <RiVipCrown2Line />
                  </p>
                </button>
                <button className="bg-emerald-600 hover:bg-emerald-700 px-2 text-gray-200">
                  <Link to="/login">Đăng Nhập </Link>
                </button>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="grid-cols-2">
                <div className="list" onClick={hanleClickList}>
                  <p className="flex items-center text-gray-700 text-sm mr-7 cursor-pointer">
                    {!show ? (
                      <span className="mr-1 mt-1 text-xl">
                        <BsListUl />
                      </span>
                    ) : (
                      <AiOutlineCloseCircle className="mr-1 mt-1 text-xl " />
                    )}
                    Danh mục
                  </p>
                </div>
                {/* <div className="overflow-auto h-80 w-48 ">
                  <p>truyện tranh</p>
                </div> */}
              </div>

              <p className="text-gray-700 text-sm mr-7 hover:text-emerald-500 cursor-pointer ">
                <Link to="/newbook">Sách mới</Link>
              </p>
              <p className="text-gray-700 text-sm mr-7 hover:text-emerald-500 cursor-pointer">
                <Link to="/rankings">Bảng xếp hạng</Link>
              </p>
              <p className="text-gray-700 text-sm mr-7 hover:text-emerald-500 cursor-pointer">
                <Link to="/hotfree">miễm phí HOT</Link>
              </p>
              <p className="text-gray-700 text-sm mr-7 hover:text-emerald-500 cursor-pointer">
                <Link to="/compilation">Tuyển Tập</Link>
              </p>
              <p className="text-gray-700 text-sm mr-7 hover:text-emerald-500 cursor-pointer">
                <Link to="/recommendedreading">Khuyên đọc</Link>
              </p>
            </div>

            {!show ? null : (
              <div className=" lists justify-start w-56 h-96 shadow-xl scrollbar-thin bg-white scrollbar-thumb-blue-100  overflow-y-scroll absolute ">
                <div className="px-5 py-2 flex-col text-xs text-pt text-left absolute">
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1 ">
                    Trinh thám - Kinh dị
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1 ">
                    Viễn tưởng - Giả tưởng
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Khởi nghiệp - Làm giàu
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Marketing - Bán hàng
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Quản trị - Lãnh đạo
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Tài chính cá nhân
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Phát triển cá nhân
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Doanh nhân - Bài học kinh doanh
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Học tập - hướng nghiệp
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Phật pháp ứng dụng
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Tâm lý - Giới tính
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Sức Khỏe làm đẹp
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Công nghệ thông tin
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Giáo dục sớm
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    truyện thiếu nhi
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Kỹ năng sống cho trẻ
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Nghệ thuật sống
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Nuôi dưỡng tinh thần
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Diểm sánh thế giới
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Trị liệu tinh thần
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Tư duy sáng tạo
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Chứng khoán - Bất động sản - Đầu tư
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Kế toán - Kiểm toán - Thuế
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Ẩm thực ba miền
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Địa danh lịch sử
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Điểm đến trong nước
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Xu hướng xê dịch
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Du lịch nước ngoài
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Kiến thức bách khoa
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Giáo dục khám phá
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Phát triển kĩ năng
                  </p>
                  <p className=" text-gray-700 hover:text-emerald-500 cursor-pointer py-1">
                    Tài chính - Ngân hàng
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <Home /> */}
    </div>
  );
};

export default ComponentsHeaderHome;
