import React from "react";
import { Card, Image } from "antd";
import Slider from "react-slick";

const { Meta } = Card;

const NewBooks = (props) => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#FCECEC] flex items-center justify-center p-10">
      <div className="container">
        <div className="flex flex-col justify-center p-5 items-center">
          <h3 className="font-bold text-[14px] text-[#ED553B]">New Books</h3>
          <h3 className="text-[#393280] text-[32px] ">New Release Books</h3>
        </div>

        <Slider {...settings}>
          {props.books.map((book) => {
            debugger;
            return (
              <div>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<Image src={book.imgSrc} />}
                >
                  <Meta title={book.name} description={book.author} />
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};


export default NewBooks;
