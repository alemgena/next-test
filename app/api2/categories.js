"use client";
import Reactm, { useEffect, useState } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    featchData();
  }, []);
  const featchData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.testvalley.kr/main-shortcut/all"
      );
      if (data) {
        setDatas(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" mt-10 mr-20 ml-10 flex flex-wrap justify-center">
      {datas?.map((image, index) => (
        <div key={index} className="max-w-xs mx-4 my-4 w-24 text-center">
          <img src={image.imageUrl} alt={image.title} className="w-16 h-16" />
          <p className="mt-2 " style={{ color: "#333333" }}>
            {image.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
