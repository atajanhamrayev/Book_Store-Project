import { NavLink } from "react-router-dom";
import {
  IconFacebookFilled,
  IconInstagramFilled,
  IconYoutubeFilled,
  IconTwitterOutlined,
} from "./../utils/Icons";

const Footer = () => {
  return (
    <div className="h-[500px]  bg-[#ED553B] text-white  flex items-center">
      <div className="container flex items-center mx-auto">
        <div className="w-full max-w-[1115px] flex flex-col gap-15">
          <div className="flex items-start justify-around w-full">
            <div>
              <div className="logo">
                <img src="./images/logo.png" alt="" />
              </div>
              <br />
              <div className="description font-normal text-[18px] max-w-[350px] tracking-light">
                Nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
              </div>
              <br />
              <div className="icons flex gap-2">
                <div className="w-20 h-20">
                  <IconFacebookFilled />
                </div>
                <div className="w-20 h-20">
                  <IconInstagramFilled />
                </div>
                <div className="w-20 h-20">
                  <IconYoutubeFilled />
                </div>
                <div className="w-20 h-20">
                  <IconTwitterOutlined />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <h3>Company</h3>
              <div>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? " text-[#beb5b2] drop-shadow-lg cursor-pointer"
                      : "drop-shadow-lg cursor-pointer"
                  }
                >
                  <span className="uppercase font-medium mx-[10px] tracking-wider ">
                    Home
                  </span>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? " text-[#beb5b2] drop-shadow-lg cursor-pointer"
                      : "drop-shadow-lg cursor-pointer"
                  }
                >
                  <span className="uppercase font-medium mx-[10px] tracking-wider ">
                    About Us
                  </span>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    isActive
                      ? " text-[#beb5b2] drop-shadow-lg cursor-pointer"
                      : "drop-shadow-lg cursor-pointer"
                  }
                >
                  <span className="uppercase font-medium mx-[10px] tracking-wider ">
                    Books
                  </span>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    isActive
                      ? " text-[#beb5b2] drop-shadow-lg cursor-pointer"
                      : "drop-shadow-lg cursor-pointer"
                  }
                >
                  <span className="uppercase font-medium mx-[10px] tracking-wider ">
                    Categories
                  </span>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? " text-[#beb5b2] drop-shadow-lg cursor-pointer"
                      : "drop-shadow-lg cursor-pointer"
                  }
                >
                  <span className="uppercase font-medium mx-[10px] tracking-wider ">
                    Blog
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="mt-10 font-thin text-[18px] tracking-tight">
            Created by Atajan Hamrayew 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
