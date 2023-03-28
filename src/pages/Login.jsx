import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hiden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/20daee97-3054-4bd6-9088-13c2fefc1a54/KR-ko-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl">로그인</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className=" rounded p-3 my-2 bg-gray-800 border border-gray-800 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-700 focus:border-gray-700 focus:bg-gray-700 focus:z-10 sm:text-sm"
                type="email"
                placeholder="이메일 주소"
                autoComplete="email"
              />

              <input
                onChange={(e) => setPassword(e.target.value)}
                className="rounded p-3 my-2 bg-gray-800 border border-gray-800 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-700 focus:border-gray-700 focus:bg-gray-700 focus:z-10 sm:text-sm"
                type="password"
                placeholder="비밀번호"
                autoComplete="current-password"
              />
              {error ? (
                <p className="text-sm text-orange-600">
                  이메일 주소 혹은 비밀번호를 확인하세요.
                </p>
              ) : null}
              <button className="bg-red-600 py-3 my-6 rounded">로그인</button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  로그인 정보 저장
                </p>
                <p>도움이 필요하신가요?</p>
              </div>
              <p className="pt-20">
                <span className="text-gray-700 mr-2">
                  Netflix 회원이 아닌가요?
                </span>
                <Link to="/signup">지금 가입하세요.</Link>
              </p>
              <p className="py-4 text-sm text-blue-600">
                <span className="text-gray-700 mr-2">
                  이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이
                  아님을 확인합니다.
                </span>
                자세히 알아보기.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
