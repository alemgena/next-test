import { FaSearch } from "react-icons/fa";
import Categroies from "./api2/categories";
import Carosule from "./api1/carosul";
import Products from "./api3/products";
export default function Home() {
  return (
    <div>
      <header className="bg-white fixed sticky shadow-lg text-gray-800 py-4 z-100">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center ml-20">
            <img
              src="https://www.testvalley.kr/logo/logo-new.svg"
              alt="Logo"
              className="w-20 h-10 ml-20 text-lg"
            />
            <h1
              style={{ color: "#00D094", fontSize: "16px" }}
              className="text-lg font-bold ml-2"
            >
              카테고리
            </h1>
          </div>

          <div className="flex-grow flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <FaSearch className="absolute left-3 top-3 text-gray-600" />{" "}
              <input
                type="text"
                style={{
                  backgroundColor: "#FFFFFF",
                  marginRight: "40px",
                  // marginTop: "40px",
                }}
                placeholder="살까말까 고민된다면 검색해보세요!"
                className="pl-10 px-4 py-2 mr-4 rounded-lg border border-gray-600 w-96"
              />
            </div>
          </div>

          <div className="flex flex-row mr-28">
            <img
              src="https://www.testvalley.kr/common/home-event.svg"
              alt="Logo"
              className="w-10 h-10 ml-20 text-lg"
            />

            <button
              className="px-4 py-2 rounded-lg"
              style={{ color: "#333333" }}
            >
              로그인 / 회원가입
            </button>
          </div>
        </div>
      </header>
      <div className="relative">
        <div className="mr-16">
          <Carosule />
        </div>
        <Categroies />
        <Products />
      </div>
    </div>
  );
}
