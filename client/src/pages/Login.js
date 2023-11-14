import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitForm = async (data) => {
    try {
      const response = await fetch("http://localhost:6060/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.alert) {
          // Dispatch your action here if needed
          setTimeout(() => {
            navigate("/"); // Redirect on successful login
          }, 1000);
        } else {
          alert(responseData.message);
        }
      } else {
        alert("check email and password");
      }
    } catch (error) {
      console.error(error);
      // Handle network errors or other issues.
    }
  };
  return (
    <div className="relative flex flex-col justify-center  overflow-hidden">
      <div className="w-[500px] p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800 text-start"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Thông tin bắt buộc !",
              })}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email "
            />
            <p className="text-start">
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
            </p>
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800 text-start"
            >
              Mật khẩu
            </label>
            <input
              {...register("password", {
                required: "Thông tin bắt buộc !",
              })}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="password"
            />
            <p className="text-start">
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
            </p>
          </div>
          <a
            href="#"
            className="text-xs text-emerald-600 hover:underline text-start"
          >
            Quên mật khẩu?
          </a>
          <div className="mt-4">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-emerald-400 rounded-md hover:bg-emerald-400 focus:outline-none focus:bg-emerald-600">
              Đăng Nhập
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
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

        <p className="mt-5 text-sm font-light text-center text-gray-700">
          {" "}
          Bạn chưa có tài khoản?{" "}
          <a href="#" className="font-medium text-emerald-600 hover:underline">
            <Link to="/signup">Đăng Ký</Link>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
