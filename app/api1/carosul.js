/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const YourComponent = () => {
  const handleImageClick = (linkUrl) => {
    window.open(linkUrl, "_blank");
  };
  const [datas, setDatas] = useState();
  useEffect(() => {
    featchData();
  }, []);
  const featchData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.testvalley.kr/main-banner/all"
      );
      if (data) {
        setDatas(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      emulateTouch={true}
      infiniteLoop={true}
      showIndicators={false}
      autoPlay={true}
      interval={1500}
    >
      {datas?.map((image, index) => (
        <a href={image.linkUrl} target="_blank" key={index}>
          <div key={index}>
            <img
              src={image.pcImageUrl}
              onClick={() => handleImageClick(image.linkUrl)}
              alt={`Image ${index + 1}`}
              style={{ maxWidth: "70%", maxHeight: "400px" }}
            />
          </div>
        </a>
      ))}
    </Carousel>
  );
};

export default YourComponent;
