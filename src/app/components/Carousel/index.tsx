"use client";
import { Carousel } from "antd";
import Image from "next/image";

const MainCarousel = () => {
  return (
    <Carousel autoplay fade dots={false}>
      {Array(15)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="h-[300px] rounded-[6.98px]">
            <Image
              className="rounded-[6.98px]"
              src={`/photos/pic${index + 1}.png`}
              alt={`Photo ${index + 1}`}
              width={1200}
              height={100}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
    </Carousel>
  );
};

export default MainCarousel;
