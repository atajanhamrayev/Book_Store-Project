import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <div className="h-[40px]  bg-[#393280] text-white  flex items-center">
        <div className="container flex items-center">
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.98047 0.0948157C4.51808 -0.0521062 5.09499 -0.0276975 5.61516 0.163978C6.13533 0.355654 6.56738 0.703034 6.8394 1.14829L6.93031 1.31422L7.74364 2.95234C7.99047 3.44954 8.0706 4.00156 7.97404 4.53971C7.87749 5.07787 7.60853 5.57843 7.2006 5.97912L7.0372 6.12612L5.75578 7.20966C5.52481 7.40788 5.69804 8.17516 6.53348 9.48699C7.28537 10.6674 7.89721 11.2187 8.19822 11.2487H8.25105L8.31616 11.2376L10.8348 10.5394C11.1733 10.4453 11.5345 10.4415 11.8752 10.5286C12.216 10.6157 12.5219 10.7899 12.7563 11.0305L12.8681 11.1585L14.5353 13.2521C14.862 13.6625 15.0248 14.1614 14.9969 14.6669C14.969 15.1723 14.752 15.6541 14.3817 16.0328L14.2318 16.1731L13.5659 16.7455C12.968 17.2588 12.22 17.6056 11.4109 17.7448C10.6017 17.884 9.76556 17.8096 9.00171 17.5306C6.62439 16.662 4.46453 14.6775 2.50248 11.5973C0.536733 8.50924 -0.280279 5.81765 0.0846125 3.51248C0.19503 2.81566 0.511597 2.15895 1.00069 1.6121C1.48979 1.06525 2.13315 0.648682 2.86245 0.406626L3.09957 0.335355L3.98047 0.0948157Z"
              fill="white"
            />
          </svg>
          <span className="ml-[10px]">+993 64 48 10 08</span>
        </div>
      </div>
      <div className="h-[100px] flex items-center">
        <div className="container flex items-center ">
          <div className="bg-[#c4c4c4] w-[70px] h-[70px] rounded-full ">
            <img src="" alt="" />
          </div>
          <div className="navigations ml-[25em] text-[16px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-[#ED553B] drop-shadow-lg cursor-pointer"
                  : "drop-shadow-lg cursor-pointer"
              }
            >
              <span className="uppercase font-medium mx-[10px] tracking-wider ">
                Home
              </span>
            </NavLink>
            <span className="text-[#d1d1d1] drop-shadow-xl">|</span>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? " text-[#ED553B] drop-shadow-lg cursor-pointer"
                  : "drop-shadow-lg cursor-pointer"
              }
            >
              <span className="uppercase font-medium mx-[10px] tracking-wider">
                About Us
              </span>
            </NavLink>
            <span className="text-[#d1d1d1] drop-shadow-xl">|</span>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive
                  ? " text-[#ED553B] drop-shadow-lg cursor-pointer"
                  : "drop-shadow-lg cursor-pointer"
              }
            >
              <span className="uppercase font-medium mx-[10px] tracking-wider">
                Books
              </span>
            </NavLink>
            <span className="text-[#d1d1d1] drop-shadow-xl">|</span>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? " text-[#ED553B] drop-shadow-lg cursor-pointer"
                  : "drop-shadow-lg cursor-pointer"
              }
            >
              <span className="uppercase font-medium  mx-[10px] tracking-wider">
                categories
              </span>
            </NavLink>
            <span className="text-[#d1d1d1] drop-shadow-xl">|</span>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? " text-[#ED553B] drop-shadow-lg cursor-pointer"
                  : "drop-shadow-lg cursor-pointer"
              }
            >
              <span className="uppercase font-medium mx-[10px] tracking-wider">
                Blog
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
