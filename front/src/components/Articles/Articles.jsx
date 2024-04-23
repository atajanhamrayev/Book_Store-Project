import React, { useState } from "react";
import { Image, Card, Button } from "antd";

import { CaretUpOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Articles = (props) => {
  const [active, setActive] = useState(false);
  const [items, setItems] = useState([
    props.articles[0],
    props.articles[1],
    props.articles[2],
  ]);
  const handleClick = () => {
    setItems([...props.articles]);
    setActive(true);
  };
  const handleClick2 = () => {
    setItems([props.articles[0], props.articles[1], props.articles[2]]);
    setActive(false);
  };

  return (
    <div className="bg-[#f5f5f5] flex items-center justify-center p-10">
      <div className="container">
        <div className="flex flex-col justify-center p-5 items-center">
          <h3 className="font-medium text-[13px] text-[#7a7a7a] uppercase tracking-[12%] mb-5">
            Read Our Articles
          </h3>
          <h3 className="font-normal text-[#173F5F] text-[48px] ">Articles</h3>
        </div>

        <div className="px-10 flex flex-wrap items-center justify-around gap-[100px]">
          {items.map((article) => {
            return (
              <div>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  cover={<Image src={article.imgSrc} />}
                >
                  {/* <Meta
                    className="font-regular text-[26px] leading-5 text-[#173F5F]"
                    description={article.article}
                  /> */}
                  <p className="font-thin text-[15px]  text-[#74642F]">
                    {article.author}
                  </p>
                  <p className="font-normal text-[20px]  text-[#173F5F]">
                    {article.article}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
        <br />
        <div className="flex items-center justify-center">
          {!active && (
            <Button
              className="float-right flex items-center"
              onClick={handleClick}
            >
              Read All Articles
              <ArrowRightOutlined />
            </Button>
          )}
          {active && (
            <Button
              className="float-right flex items-center"
              onClick={handleClick2}
            >
              <CaretUpOutlined />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
