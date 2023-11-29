import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCloudUpload } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameBook: "",
      imageBook: "",
      author: "",
      category: "",
      publishing: "",
      updateDay: "",
      description: "",
      // confirmPassword: "",
    },
  });

  const [picture, setPicture] = useState(null);
  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmitForm = async (data) => {
    try {
      const response = await fetch("http://localhost:6060/uploadProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        alert(responseData.message);

        if (responseData.alert) {
          navigate("/login");
        }
      } else {
        const errorData = await response.json();
        alert.error(errorData);
        // Handle registration error, display an error message to the user.
      }
    } catch (error) {
      console.error(error);
      // Handle network errors or other issues.
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div className="w-[450px] px-6 py-4  overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <h1 className="text-3xl font-bold text-blue-600 hover:text-blue-700 mb-5 shadow mx-10 ">
            New Product
          </h1>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div>
              <label
                htmlFor="nameBook"
                className="block text-sm font-medium text-gray-700 undefined text-start"
              >
                Nhập Tên sách
              </label>
              <div className="flex flex-col items-start">
                <input
                  {...register("nameBook", {
                    required: "thông tin bắt buộc !",
                  })}
                  type="text"
                  name="nameBook"
                  className="block w-full px-4 py-2 mt-2  bg-slate-200  focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <p>
                  {errors.nameBook && (
                    <span style={{ color: "red" }}>
                      {errors.nameBook.message}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="mt-2 ">
              <label
                htmlFor="imageBook"
                className="block text-sm  font-medium text-gray-700 undefined text-start"
              >
                Hình ảnh
              </label>
              <div className="h-40 w-full bg-slate-200 mt-1 rounded flex items-center justify-center cursor-pointer ">
                {picture ? (
                  <img
                    className="image w-full h-full"
                    src={picture && picture}
                    alt=""
                  />
                ) : (
                  <span className="text-5xl cursor-pointer">
                    <BsCloudUpload />
                  </span>
                )}
                <input
                  {...register("imageBook", { required: true })}
                  onChange={onChangePicture}
                  type="file"
                  name="imageBook"
                  className=""
                />

                {errors.file && <p>Please select an image</p>}
              </div>
              <p>
                {errors.imageBook && (
                  <span style={{ color: "red" }}>
                    {errors.imageBook.message}
                  </span>
                )}
              </p>
            </div>
            <div className="mt-2">
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700 undefined text-start"
              >
                Tác giả
              </label>
              <div className="flex flex-col items-start ">
                <input
                  {...register("author", {
                    required: "Thông tin bắt buộc !",
                  })}
                  type="text"
                  name="author"
                  className="block w-full px-4 py-2 mt-2  bg-slate-200  focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <p>
                  {errors.author && (
                    <span style={{ color: "red" }}>
                      {errors.author.message}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 undefined text-start"
              >
                Thể loại
              </label>
              <div className="flex flex-col items-start">
                <select
                  className="bg-slate-200 p-1 my-1  text-blue-600 w-full"
                  {...register("category")}
                >
                  <option value="Trinh thám - Kinh dị">
                    Trinh thám - Kinh dị
                  </option>
                  <option value="Viễn tưởng - Giả tưởng">
                    Viễn tưởng - Giả tưởng
                  </option>
                  <option value="Khởi nghiệp - Làm giàu">
                    Khởi nghiệp - Làm giàu
                  </option>
                  <option value="Marketing - Bán hàng">
                    {" "}
                    Marketing - Bán hàng
                  </option>
                  <option value="Quản trị - Lãnh đạo">
                    Quản trị - Lãnh đạo
                  </option>
                  <option value="Tài chính cá nhân">Tài chính cá nhân</option>
                  <option value="Phát triển cá nhân">Phát triển cá nhân</option>
                  <option value=" Doanh nhân - Bài học kinh doanh">
                    Doanh nhân - Bài học kinh doanh
                  </option>
                  <option value="Học tập - hướng nghiệp">
                    Học tập - hướng nghiệp
                  </option>
                  <option value="Phật pháp ứng dụng">
                    {" "}
                    Phật pháp ứng dụng
                  </option>
                </select>
                <p>
                  {errors.category && (
                    <span style={{ color: "red" }}>
                      {errors.category.message}
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined text-start"
              >
                Nhà xuất bản
              </label>
              <div className="flex flex-col items-start">
                <input
                  {...register("publishing", {
                    required: "thông tin bắt buộc !",
                  })}
                  type="text"
                  name="publishing"
                  className="block w-full px-4 py-2 mt-2  bg-slate-200  focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <p>
                  {errors.publishing && (
                    <span style={{ color: "red" }}>
                      {errors.publishing.message}
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined text-start"
              >
                Ngày cập nhật
              </label>
              <div className="flex flex-col items-start">
                <input
                  {...register("updateDay", {
                    required: "thông tin bắt buộc !",
                  })}
                  type="text"
                  name="updateDay"
                  className="block w-full px-4 py-2 mt-2  bg-slate-200  focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <p>
                  {errors.updateDay && (
                    <span style={{ color: "red" }}>
                      {errors.updateDay.message}
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined text-start"
              >
                Mô tả
              </label>
              <div className="flex flex-col items-start ">
                <textarea
                  {...register("description", {
                    required: "thông tin bắt buộc !",
                  })}
                  rows={2}
                  name="description"
                  className="block w-full px-4 py-2 mt-2  bg-slate-200  focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
                <p>
                  {errors.description && (
                    <span style={{ color: "red" }}>
                      {errors.description.message}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
