"use client";
import { Carousel } from "antd";
import Image from "next/image";

const MainCarousel = () => {
  return (
    <Carousel autoplay fade dots={false}>
      {Array(15)
        .fill(null)
        .map((_, index) => (
          <div key={index}>
            <Image
              src={`/photos/pic${index + 1}.png`}
              alt={`Photo ${index + 1}`}
              width={1200}
              height={599}
            />
          </div>
        ))}
    </Carousel>
  );
};

export default MainCarousel;
