import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      // confirmPassword: "",
    },
  });

  console.log(errors);

  // lưa dữ liệu người dùng vào data
  const onSubmitForm = async (data) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/signup`, {
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
        <div className="w-full px-6 py-4  overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined text-start"
              >
                Tên Đăng Nhập
              </label>
              <div className="flex flex-col items-start">
                <input
                  {...register("name", {
                    required: "Thông tin bắt buộc !",
                    minLength: {
                      value: 7,
                      message: "Vui lòng nhập đủ họ và tên !",
                    },
                    maxLength: {
                      value: 50,
                      message: "Tên bạn quá dài không hợp lệ !",
                    },
                  })}
                  type="text"
                  name="name"
                  className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Họ Và Tên"
                />
                <p>
                  {errors.name && (
                    <span style={{ color: "red" }}>{errors.name.message}</span>
                  )}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <label
                htmlFor="phone"
                className="block text-sm  font-medium text-gray-700 undefined text-start"
              >
                Số Điện Thoại
              </label>
              <div className="flex flex-col items-start ">
                <input
                  {...register("phone", {
                    required: "Thông tin bắt buộc !",
                    minLength: {
                      value: 10,
                      message: "Số điện thoại không đúng !",
                    },
                  })}
                  type="number"
                  name="phone"
                  className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Phone"
                />
                <p>
                  {errors.phone && (
                    <span style={{ color: "red" }}>{errors.phone.message}</span>
                  )}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined text-start"
              >
                Email
              </label>
              <div className="flex flex-col items-start ">
                <input
                  {...register("email", {
                    required: "Thông tin bắt buộc !",
                  })}
                  type="email"
                  name="email"
                  className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email"
                />
                <p>
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                  )}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined text-start"
              >
                Mật khẩu
              </label>
              <div className="flex flex-col items-start">
                <input
                  {...register("password", {
                    required: "Thông tin bắt buộc !",
                    minLength: {
                      value: 6,
                      message: "Mật Khẩu của bạn ít nhất 6 kí tự",
                    },
                  })}
                  type="password"
                  name="password"
                  className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
                <p>
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      {errors.password.message}
                    </span>
                  )}
                </p>
              </div>
            </div>
            {/* <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined text-start"
              >
                Xác nhận mật khẩu
              </label>
              <div className="flex flex-col items-start">
                <input
                  {...register("confirmPassword", {
                    required: "Thông tin bắc buộc",
                    minLength: {
                      value: 7,
                      message: "Mật Khẩu bạn quá ngắn !",
                    },
                  })}
                  type="password"
                  name="password_confirmation"
                  className="block w-full mt-1 py-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter The Password"
                />
                <p>
                  {errors.confirmPassword && (
                    <span style={{ color: "red" }}>
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </p>
              </div>
            </div> */}
            <a
              href="#"
              className="text-xs text-emerald-300 hover:underline text-start"
            >
              Quên mật khẩu?
            </a>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-emerald-400 hover:bg-emerald-500 rounded-full text-white"
              >
                Đăng Ký
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Tạo tài khoản?{" "}
            <span>
              <a className="text-emerald-300 hover:underline" href="#">
                <Link to="/login">Đăng Nhập</Link>
              </a>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Đăng nhập bằng Google</p>
            </button>
            <button
              aria-label="Login with GitHub"
              role="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
              <p>Đăng nhập bằng GitHub</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
