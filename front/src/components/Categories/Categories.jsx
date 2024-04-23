import React, { useState } from "react";
import { Card } from "antd";
import { Image, Button } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Categories = (props) => {
  const [active, setActive] = useState(false);
  const [items, setItems] = useState([
    props.categories[0],
    props.categories[1],
    props.categories[2],
  ]);
  const handleClick = () => {
    setItems([...props.categories]);
    setActive(true);
  };
  const handleClick2 = () => {
    setItems([props.categories[0], props.categories[1], props.categories[2]]);
    setActive(false);
  };

  return (
    <div className="container p-10">
      <div className="flex flex-col">
        <div className="flex flex-col justify-start p-5 items-start">
          <h3 className="font-bold text-[14px] text-[#ED553B]">Categories</h3>
          <h3 className="text-[#393280] text-[32px] ">
            Explore our Categories
          </h3>
        </div>
      </div>
      <div className="px-10 flex flex-wrap items-center justify-around gap-[100px]">
        {items.map((category) => {
          return (
            <div>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<Image src={category.imgSrc} />}
              >
                <Meta title={category.name} />
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
            View More
            <CaretDownOutlined />
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
  );
};

export default Categories;
