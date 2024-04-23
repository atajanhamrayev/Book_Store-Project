import { Button, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";

const Dashboard = (props) => {
  const ref = useRef();
  return (
    <div className="bg-gradient-to-r from-[#FFE5E5] h-[500px] ">
      <div className="h-[500px] container relative">
        <Carousel autoplay ref={ref}>
          {props.books.map((book) => {
            return (
              <div>
                <div className="h-[500px] flex flex-row items-center">
                  <div className="text-[#393280] w-[50%] px-8">
                    <h1 className="font-semibold text-[60px]">{book.name}</h1>
                    <p className="opacity-80">{book.description}</p>
                    <button className="mt-[20px] border-[1px] border-solid border-[#393280] w-[190px] h-[60px] rounded-xl hover:bg-[#393280] hover:text-white">
                      Read More
                    </button>
                  </div>
                  <div className="h-[500px] w-[40%]">
                    <img
                      className="h-full w-full object-contain"
                      src={book.imgSrc}
                      alt="swiper_Photo"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <Button
          className="absolute top-[50%] left-[20px] flex items-center text-[#393280]"
          onClick={() => ref.current.prev()}
        >
          <LeftOutlined />
        </Button>
        <Button
          className="absolute top-[50%] right-[20px] flex items-center text-[#393280]"
          onClick={() => ref.current.next()}
        >
          <RightOutlined  />
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
