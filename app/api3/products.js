"use client";
import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const DataDisplay = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    featchData();
  }, []);
  const featchData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.testvalley.kr/collections?prearrangedDiscount"
      );
      if (data) {
        setDatas(
          data.items.filter(
            (item) => item.type === "SINGLE" && item.viewType === "TILE"
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="ml-28">
      {datas?.map((item, index) => (
        <div key={index} className="ml-20">
          <h2
            className=" mt-16 text-lg font-bold text-blue-500 mb-2"
            style={{ color: "#333333" }}
          >
            {item.title}
          </h2>
          <p
            className=" text-blue-500 mb-2 mt-4 "
            style={{ color: "#999999", fontSize: "12px" }}
          >
            {item.subtitle}
          </p>
          <div className="flex ml-20 flex-col">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              emulateTouch={true}
              infiniteLoop={true}
              showIndicators={false}
              autoPlay={true}
              interval={1500}
              className="w-full"
            >
              {chunkArray(item.items, 4).map((chunk, idx) => (
                <div key={idx} className="flex  justify-center  flex-row">
                  {chunk.map((subItem) => (
                    <div key={subItem.id} className="flex w-64 flex-col">
                      {subItem.publication.media.map((media, mediaIdx) => (
                        <div
                          className="flex w-full flex-col rounded-lg border border-gray-100 bg-white"
                          key={mediaIdx}
                        >
                          <a
                            className="ml-6 flex min-h-72 overflow-hidden rounded-xl"
                            href="#"
                          >
                            <img
                              key={mediaIdx}
                              src={media.uri}
                              alt={`Item ${subItem.id} - Media ${mediaIdx + 1}`}
                              className="w-full h-full object-cover mb-2" // Adjust image size
                            />
                          </a>
                          <div className="flex flex-col ml-6">
                            <h3
                              className="text-sm font-bold mt-4 "
                              style={{ color: "#333333", fontSize: "15px" }}
                            >
                              {subItem.publication?.title}
                            </h3>
                            <p className="text-sm">
                              {subItem.publication?.preface}
                            </p>
                            <p className="text-sm">
                              Price: {subItem.publication?.priceInfo.price}
                            </p>
                            <div
                              className="flex flex-row"
                              style={{ color: "#333333", fontSize: "12px" }}
                            >
                              <FaStar />
                              <p className="ml-2">
                                {subItem.publication.rating}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  );
};
// Function to chunk array into smaller arrays
const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

export default DataDisplay;
